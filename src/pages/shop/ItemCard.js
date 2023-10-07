import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import headphone from "./headphone.jpeg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemCard = ({title,price,desc}) => {
  return (
    <Card sx={{ maxWidth: 330,mx:"auto", mt:4}}>
      <CardMedia sx={{ height: 280 }} image={headphone} />
      <CardContent>
        <Stack direction="row" useFlexGap justifyContent="space-between">
          <Typography variant="h6">{title}</Typography>

          <Typography variant="h6">{price}</Typography>
        </Stack>
        <Typography variant="body2" textAlign="left">
          {desc}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ marginTop: 1 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            sx={{borderRadius: 8 }}
          >
            add to cart
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
