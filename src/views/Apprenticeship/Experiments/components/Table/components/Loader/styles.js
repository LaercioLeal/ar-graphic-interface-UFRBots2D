import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 0 20px;
  margin-bottom: 32px;
`

export const Heading = styled.div`
  width: 100%;
  margin-top: 16px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Table = styled.div`
  margin-top: 43px;
`

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 232px) repeat(3, 155px) 141px;

  margin-left: 46px;
`

export const TableBody = styled.div`
  margin-top: 54px;

  display: grid;
  grid-template-columns: 46px repeat(2, 232px) repeat(3, 155px) 141px;
  grid-template-rows: repeat(10, 54px);
`
