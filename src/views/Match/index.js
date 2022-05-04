import React, { useState, useMemo, useEffect } from "react";
import { useSnackbar } from "notistack";
import { Container, HeadingPage } from "components";

import * as S from "./styles";
import goalIcon from "assets/icon/goal.png";
import { Results, Table } from "./components";
import Queue from "./queue";

import { downloadResults } from "./funtcions";
import { generateHash } from "utils";

function Match() {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);
  const [results, setResults] = useState(null);

  const queue = useMemo(() => {
    return new Queue();
  }, []);

  const getDocument = async () => {
    const res = await downloadResults(
      data.filter((item) => item.status === "done")
    );
    if (!res)
      enqueueSnackbar("Tente Novamente!", {
        variant: "error",
      });
    else enqueueSnackbar("Download realizado!", { variant: "success" });
  };

  const handleAdd = (values) => {
    const { mode, teams } = values;
    const { first, second } = teams;
    setData([
      ...data,
      {
        mode,
        status: "wait",
        team1: { ...first, score: "" },
        team2: { ...second, score: "" },
        id: generateHash(),
      },
    ]);
  };

  const handleRemove = (match) => {
    queue.remove(match);
    setData(data.filter((item) => item.id !== match.id));
  };

  const runAll = () => {
    for (const item of data) {
      queue.add(item);
    }
    fetchData();
    enqueueSnackbar("Partidas preparadas para execução", { variant: "info" });
  };

  const fetchData = (match = null) => {
    if (queue.queue.length === 0) return;
    let itemFinish, data_;
    data_ = data.map((item) => {
      if (!!match && item.id === match.id) console.log("aqui", match);
      if (!!match && item.id === match.id) return match;

      itemFinish = queue.results.find((q) => q.id === item.id);
      if (!itemFinish) itemFinish = queue.queue.find((q) => q.id === item.id);
      if (!itemFinish) {
        if (item.status !== "wait") {
          return {
            ...item,
            status: "done",
          };
        }
        return item;
      }
      return {
        ...item,
        status: itemFinish.status,
      };
    });
    setData(data_);
    return data_;
  };

  useEffect(() => {
    if (!queue.running && !!queue.queue.length) {
      if (!data.find((item) => item.status === "running"))
        setData(
          data.map((item) => {
            if (item.id === queue.queue[0].id)
              return { ...item, status: "running" };
            return item;
          })
        );
      queue.run().then(async (match) => {
        setResults(match);
        enqueueSnackbar(`Partida finalizada`, {
          variant: "success",
        });
      });
    }
  }, [queue.queue.length, queue.running]); // eslint-disable-line

  useEffect(() => {
    if (!!results) {
      setData(
        data.map((item) => {
          if (item.id === results.id) {
            return results;
          }
          if (item.id === queue?.queue[0]?.id)
            return { ...item, status: "running" };
          return item;
        })
      );
    }
  }, [results]); // eslint-disable-line

  return (
    <Container>
      <HeadingPage page="match" title="Partida" icon={goalIcon} />
      <Results results={results} />
      <S.Content>
        <Table
          data={data}
          getDocument={getDocument}
          runAll={runAll}
          run={(match) => {
            queue.add(match).then((n) => {
              setData(
                data.map((item) => {
                  if (item.id === n.id) return n;
                  return item;
                })
              );
            });
          }}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      </S.Content>
    </Container>
  );
}

export default Match;
