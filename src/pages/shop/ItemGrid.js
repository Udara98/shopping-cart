import { Grid } from "@mui/material";
import React from "react";
import ItemCard from "./ItemCard";
import { Container } from "@mui/material";

const items = [
  {
    title: "item1",
    price: "$17.44",
    desc: "Table with air purifier, stained venner/ black",
  },
  {
    title: "item2",
    price: "$19.84",
    desc: "Table with air purifier, stained venner/ black",
  },
  {
    title: "item3",
    price: "$57.44",
    desc: "Table with air purifier, stained venner/ black",
  },
  {
    title: "item4",
    price: "$54.44",
    desc: "Table with air purifier, stained venner/ black",
  },
  {
    title: "item1",
    price: "$14.44",
    desc: "Table with air purifier, stained venner/ black",
  },
  {
    title: "item2",
    price: "$47.44",
    desc: "Table with air purifier, stained venner/ black",
  },
  {
    title: "item3",
    price: "$15.44",
    desc: "Table with air purifier, stained venner/ black",
  },
  {
    title: "item4",
    price: "$77.44",
    desc: "Table with air purifier, stained venner/ black",
  },
];

const ItemGrid = () => {
  return (
    <Grid container spacing={3}>
      {items.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
          <ItemCard title={item.title} price={item.price} desc={item.desc} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemGrid;
