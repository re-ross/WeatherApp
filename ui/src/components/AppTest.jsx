import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import useGetCurrencyConversions from "../hooks/useGetCurrencyConversions";
import CurrencyDropdown from "./CurrencyDropdown";
import getSymbolFromCurrency from "currency-symbol-map";
import currencyCodes from "currency-codes";
import { useQueryClient } from "react-query";
import Big from "big.js";
