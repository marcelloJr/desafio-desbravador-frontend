/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDebounce from "@/hooks/useDebounce";
import { useCallback, useEffect, useState } from "react";
const SearchInput = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState<string | null>(null)
  const navigate = useNavigate()
  const toUserDetail = (value: string) => navigate(`?username=${value}`)
  const debouncedSearch = useDebounce((input) => {
    toUserDetail(input)
  }, 500);
  const handleChange = useCallback((event: any) => {
    const inputValue = event.target.value;
    setValue(inputValue)  
    // debouncedSearch(inputValue);
  }, [debouncedSearch]);
  
  useEffect(() => {
    if (searchParams.has('username')) setValue(searchParams.get('username'))
  }, [searchParams])
  
  return (
    <>
      <Typography variant="h6">Bem-vindo ao GitHub User Finder</Typography>
      <TextField
        hiddenLabel
        variant="outlined"
        placeholder="Pesquise por usuário GitHub"
        value={value}
        InputProps={{
          endAdornment: <SearchIcon color="action" />,
        }}
        sx={{ mt: 2 }}
        onKeyDown={(e: any) => {
          if (["Enter"].includes(e.key)) toUserDetail(e.target.value)
        }}
        onChange={handleChange}
        fullWidth
      />
    </>
  )
}

export default SearchInput