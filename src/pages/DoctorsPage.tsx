import { Helmet } from "react-helmet";

import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

import {
  BreadcrumbsUkr,
  CustomizedPaper,
  PaginationBottomBar,
  SelectTopBar,
  SkeletonInfoCards,
} from "~/components/atomic";

import {
  AsideFilter,
  FilterViewMode,
  SelectedItemsBox,
} from "~/components/AsideFilter";

import { SearchBar } from "~/components/doctorsPage";
import { SmallCardDoctor } from "~/components/Small-card-doctor/Small-card-doctor";

import { useDataContext } from "~/providers";
import { useDeviceType } from "~/hooks";
import { useMemo, useState } from "react";

const QTY = 5;

export const DoctorsPage = () => {
  const { palette } = useTheme();
  const { isWidth600, isSmDown, isMdDown } = useDeviceType();

  const { doctors, filteredDoctors, setFilteredDoctors } = useDataContext();
  const [page, setPage] = useState(1);

  const count = useMemo(
    () => Math.ceil(filteredDoctors.length / QTY) ,
    [filteredDoctors]
  );

  return (
    <>
      <Helmet>
        <title>Лікарі - BeHealth</title>
        <meta
          name="description"
          content="Сторінка лікарів на сайті BeHealth."
        />
      </Helmet>

      <Container sx={{ mt: "30px", mb: "60px" }}>
        <BreadcrumbsUkr />

        <Typography
          variant="h4"
          color={palette.custom.primary20}
          sx={{
            mt: { xs: "16px", sm: "26px" },
            mb: { xs: "16px", sm: "32px" },
          }}
        >
          Лікарі
        </Typography>

        <SearchBar />

        <Stack
          direction="row"
          gap="32px"
          sx={{ mt: { xs: "16px", sm: "32px" } }}
        >
          {!isMdDown && <FilterViewMode />}

          <Box sx={{ flex: "1 0 auto" }}>
            <SelectTopBar setFilteredData={setFilteredDoctors} />

            {isMdDown && <FilterViewMode />}

            {doctors.length === 0 && <SkeletonInfoCards />}

            {filteredDoctors.length > 0 &&
              filteredDoctors
                .slice(page - 1, page - 1 + QTY)
                .map((doctor, i) => (
                  <SmallCardDoctor
                    key={`doc${doctor.id}-${i}`}
                    doctor={doctor}
                  />
                ))}

            <CustomizedPaper
              sx={{
                mt: { xs: "16px", sm: "24px" },
                p: "16px 32px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PaginationBottomBar count={count} setPage={setPage} />
            </CustomizedPaper>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
