import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { updateNewTicketInfo } from "../store/slices/NewTicketSlice";
import { useDispatch, useSelector } from "react-redux";

const SelectComponent = (props) => {
  const dispatch = useDispatch();
  const value = useSelector(({ newTicket }) => newTicket[props["valueKey"]]);
  const menus = (props.menus || []).map((menu) => (
    <MenuItem key={menu.value} value={menu?.value}>
      {menu?.label}
    </MenuItem>
  ));

  const handleChange = (event) => {
    dispatch(updateNewTicketInfo({ [props["valueKey"]]: event.target.value }));
  };
  return (
    <FormControl fullWidth required={props?.required}>
      <InputLabel id="demo-simple-select-label">{props?.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value||''}
        label={props?.label}
        onChange={handleChange}
      >
        {menus}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
