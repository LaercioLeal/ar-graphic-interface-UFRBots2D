import React, { useCallback, useMemo, useState } from "react";
import { Grid } from "@material-ui/core";

import * as S from "./styles";
import * as T from "../../../../styles";

import Switch from "react-switch";

import { Teammate } from "../../../index";

import { getDirectory } from "services";
import themes from "Provider/themes";
import { useSnackbar } from "notistack";
import { Button } from "components";

const variants = {
  visibleContainer: {
    opacity: 1,
    height: "auto",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  hidden: {
    y: -20,
    x: 20,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

function Form({ handleAdd, show }) {
  const handleSubmit = useCallback(
    (values) => {
      handleAdd(values);
    },
    [handleAdd]
  );

  const isRunning = false;
  const { enqueueSnackbar } = useSnackbar();
  const [teams, setTeams] = useState({
    first: null,
    second: null,
  });
  const [isChecked, setChecked] = useState(true);

  const atLeastOne = useMemo(() => {
    return teams["first"]?.name || teams["second"]?.name;
  }, [teams]);

  const isTeam1 = useMemo(() => {
    return teams["first"]?.name || false;
  }, [teams]);

  const isTeam2 = useMemo(() => {
    return teams["second"]?.name || false;
  }, [teams]);

  const form = useMemo(() => {
    return {
      values: {
        mode: isChecked ? 1 : 2,
        teams: teams,
      },
      isValid: isTeam1 && isTeam2,
    };
  }, [isTeam1, isTeam2, isChecked, teams]);

  const handleSelect = useCallback(
    async (position) => {
      if (!teams[position]) {
        let { data, isError, message } = await getDirectory();
        if (!isError) {
          if (
            teams["first"]?.name === data.teamName ||
            teams["second"]?.name === data.teamName
          ) {
            enqueueSnackbar(
              "Você deve escolher um time diferente como adversário",
              { variant: "error" }
            );
          } else {
            setTeams({
              ...teams,
              [position]: {
                path: data.path,
                name: data.teamName,
              },
            });
          }
        } else {
          enqueueSnackbar(message, { variant: "error" });
        }
      } else {
        setTeams({
          ...teams,
          [position]: null,
        });
      }
    },
    [teams, enqueueSnackbar]
  );

  return (
    <S.Container
      initial="closed"
      animate={show ? "visibleContainer" : "closed"}
      inherit={false}
      variants={variants}
    >
      <S.Content>
        <S.Fieldset>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <T.Teammate divisor={atLeastOne && !isRunning}>
                <Teammate
                  handleSelect={handleSelect}
                  isRunning={isRunning}
                  isTeam={isTeam1}
                  teams={teams}
                  position="first"
                />
              </T.Teammate>
            </Grid>
            <Grid item xs={6}>
              <T.Teammate>
                <Teammate
                  handleSelect={handleSelect}
                  isRunning={isRunning}
                  isTeam={isTeam2}
                  teams={teams}
                  position="second"
                />
              </T.Teammate>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <T.Section>
                <T.Title>
                  <p>
                    Aqui você pode trocar a velocidade da partida
                    <br />
                    <p className="info">Modo Normal - média de 10 minutos </p>
                    <p className="info">Modo Rápido - média de 2 minutos </p>
                  </p>
                </T.Title>

                <Switch
                  onChange={() => setChecked(!isChecked)}
                  checked={isChecked}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor={themes.colors.blue}
                  offColor={themes.colors.success}
                  disabled={isRunning}
                />
                <T.Title>
                  <p className="info">Modo {isChecked ? "Normal" : "Rápido"}</p>
                </T.Title>
              </T.Section>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                variant="secondary"
                onClick={() => handleSubmit(form.values)}
                isDisabled={!form.isValid}
              >
                Adicionar Partida
              </Button>
            </Grid>
          </Grid>
        </S.Fieldset>
      </S.Content>
    </S.Container>
  );
}

export default Form;
