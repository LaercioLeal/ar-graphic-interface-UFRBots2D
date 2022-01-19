import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import DataTable from 'react-data-table-component'
import ArrowDownwardOutlined from '@material-ui/icons/ArrowDownwardOutlined'
import { useSnackbar } from 'notistack'

import { sortDate } from '@saude-facil/tools'
import {
  createContributorContract,
  updateContributorContract,
} from '@saude-facil/services/lib/api/companies'

import { Empty, Heading, Form, Loader } from './components'
import * as S from './styles'

const tableColumns = [
  { name: 'Nome', selector: ({ name }) => name, sortable: true, grow: 1.5 },
  { name: 'E-mail', selector: ({ email }) => email, grow: 1.5 },
  { name: 'CPF', selector: ({ document }) => document },
  { name: 'Celular', selector: ({ phone }) => phone },
  {
    name: 'Data Inclusão',
    selector: ({ createdAt }) => createdAt,
    sortable: true,
    sortFunction: (a, b) => sortDate(a, b, 'createdAt'),
  },
  {
    name: 'Status',
    selector: ({ status }) => status,
    grow: 0.5,
    sortable: true,
  },
]

const paginationOptions = {
  rowsPerPageText: 'Linhas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

function Table({ data, isLoading, hasError, onSubmitSucceeds }) {
  const { enqueueSnackbar } = useSnackbar()

  const [tableData, setTableData] = useState([])
  const [isCreatingNewContributor, setIsCreatingNewContributor] =
    useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [contributorWithRowExpanded, setContributorWithRowExpanded] =
    useState('')
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [formLoadingText, setFormLoadingText] = useState('')

  const handleFilter = useCallback((value) => {
    setSearchTerm(value)
  }, [])

  const handleCancel = useCallback(() => {
    setTableData(data)

    setIsCreatingNewContributor(false)
  }, [data])

  const handleRowExpansion = useCallback(
    (expanded, row) => {
      const index = data.indexOf(row)
      const rowElement = document.querySelector(`#row-${index + 1}`)

      if (!rowElement) return

      if (expanded) {
        rowElement.classList.add('expanded')
      } else {
        rowElement.classList.remove('expanded')
        setContributorWithRowExpanded('')
      }

      if (isCreatingNewContributor) {
        handleCancel()
      }
    },
    [data, isCreatingNewContributor, handleCancel]
  )

  const handleAddNewContributor = useCallback(() => {
    const newContributor = { defaultExpanded: true }

    setContributorWithRowExpanded('')
    setIsCreatingNewContributor(true)
    setTableData((data) => [newContributor, ...data])
  }, [])

  const handleSubmit = useCallback(
    async (id, values, method = '') => {
      try {
        setIsFormLoading(true)

        if (!method) {
          setFormLoadingText('Salvando...')
        } else {
          setFormLoadingText(
            method === 'inactive' ? 'Inativando...' : 'Ativando...'
          )
        }

        let successMessage

        if (isCreatingNewContributor) {
          await createContributorContract(values)

          successMessage = 'Colaborador adicionado com sucesso!'
        } else {
          await updateContributorContract(id, values)

          successMessage = 'Alteração realizada com sucesso!'
        }

        await onSubmitSucceeds({ omitSkeletonLoader: true })

        enqueueSnackbar(successMessage, { variant: 'success' })

        setIsCreatingNewContributor(false)
        setContributorWithRowExpanded(id)
      } catch (error) {
        console.log(error)

        enqueueSnackbar(
          'Ocorreu um erro ao salvar os dados. Tente novamente mais tarde!',
          { variant: 'error' }
        )
      } finally {
        setFormLoadingText('')
        setIsFormLoading(false)
      }
    },
    [enqueueSnackbar, isCreatingNewContributor, onSubmitSucceeds]
  )

  useLayoutEffect(() => {
    setTableData(data)
  }, [data])

  const filteredData = useMemo(() => {
    if (isCreatingNewContributor) {
      setSearchTerm('')

      return tableData
    }

    return tableData.filter((item) => {
      return (
        item?.name?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        item?.email?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        item?.document?.includes(searchTerm) ||
        item?.phone?.includes(searchTerm) ||
        item?.createdAt?.includes(searchTerm) ||
        item?.status?.toLowerCase()?.includes(searchTerm.toLowerCase())
      )
    })
  }, [searchTerm, tableData, isCreatingNewContributor])

  return (
    <S.Container>
      <DataTable
        key={isCreatingNewContributor ? 1 : 0} // remount component
        columns={tableColumns}
        data={filteredData}
        pagination
        paginationComponentOptions={paginationOptions}
        highlightOnHover
        pointerOnHover
        subHeader={!isLoading && !!data.length}
        expandableRows
        expandOnRowClicked
        expandableRowExpanded={(row) => {
          return contributorWithRowExpanded === row.id || row.defaultExpanded
        }}
        progressPending={isLoading}
        progressComponent={<Loader />}
        subHeaderComponent={
          <Heading
            onAddButtonClick={handleAddNewContributor}
            disabledAddButton={isCreatingNewContributor}
            onFilter={handleFilter}
          />
        }
        expandableRowsComponent={({ data }) => (
          <Form
            data={data}
            isUpdate={!isCreatingNewContributor}
            onCancel={handleCancel}
            onSubmit={(values) => handleSubmit(data.id, values)}
            onToggleActivation={(values, method) =>
              handleSubmit(data.id, values, method)
            }
            isLoading={isFormLoading}
            loadingText={formLoadingText}
          />
        )}
        noDataComponent={
          <Empty
            onAddButtonClick={handleAddNewContributor}
            notFound={!!data.length}
            error={hasError}
          />
        }
        sortIcon={<ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
        onRowExpandToggled={handleRowExpansion}
      />
    </S.Container>
  )
}

export default Table
