import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NameAndInfoAboutDoctor = () => {
  const { custom } = useTheme().palette;
  const navigate = useNavigate();

  return (
    <Box display="flex" gap="4px" flexDirection="column">
      {/*//todo add rest data*/}
      <Typography variant="body2" component="p" color={custom.primary80}>
        Сімейний лікар
      </Typography>
      <Typography
        variant="h5"
        component="p"
        onClick={() => navigate("1")}
        sx={{ cursor: "pointer" }}
      >
        Князєва Ольга Станіславівна
      </Typography>
      <Box pt="14px">
        <Typography variant="body2" component="span" color={custom.neutral60}>
          Стаж:
        </Typography>
        <Typography
          variant="subtitle2"
          component="span"
          color={custom.neutral60}
          ml={0.5}
        >
          4 роки
        </Typography>
      </Box>
    </Box>
  );
};
