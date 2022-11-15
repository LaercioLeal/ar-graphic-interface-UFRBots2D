import React from "react";

import * as S from "./styles";

function Loader() {
  return (
    <S.Container>
      {/* <S.Heading>
        <S.Top>
          <Skeleton width={229} height={40} variant="rect" />
          <Skeleton width={151} height={40} variant="rect" />
        </S.Top>
        <Skeleton width={180} height={22} style={{ marginTop: 21 }} />
      </S.Heading>

      <S.Table>
        <S.TableHead>
          <Skeleton width={60} height={20} variant="rect" />
          <Skeleton width={60} height={20} variant="rect" />
          <Skeleton width={60} height={20} variant="rect" />
          <Skeleton width={60} height={20} variant="rect" />
          <Skeleton width={60} height={20} variant="rect" />
          <Skeleton width={60} height={20} variant="rect" />
        </S.TableHead>

        <S.TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <React.Fragment key={item}>
              <Skeleton width={20} height={24} variant="rect" />
              <Skeleton width={180} height={24} variant="rect" />
              <Skeleton width={180} height={24} variant="rect" />
              <Skeleton width={88} height={24} variant="rect" />
              <Skeleton width={88} height={24} variant="rect" />
              <Skeleton width={88} height={24} variant="rect" />
              <Skeleton width={88} height={24} variant="rect" />
            </React.Fragment>
          ))}
        </S.TableBody>
      </S.Table> */}
    </S.Container>
  );
}

export default Loader;
