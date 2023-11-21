import {Box, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import {ChangeEvent, useEffect} from "react";

interface SortAndFilterProps {
    sortHandler: any;
    filterHandler: any;
    sort: string;
    filterFavorites: boolean;
}

const SortAndFilter = (props: SortAndFilterProps) => {
    const {sortHandler, filterHandler, sort, filterFavorites} = props;

    useEffect(() => {
        sortHandler(sort);
    });

    const handleSort = (event: SelectChangeEvent) => {
        sortHandler(event.target.value as string);
    }

    const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
        filterHandler(event.target.checked);
    }

    return (
        <Box sx={{
            display : 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2
        }}>
            <FormControlLabel control={
                <Checkbox
                    checked={filterFavorites}
                    onChange={handleFilter}
                />
            } label="Nur Favoriten anzeigen" />
            <FormControl>
                <InputLabel id="sort-select">Sortierung</InputLabel>
                <Select
                    labelId="sort-select"
                    value={sort}
                    label="Sortierung"
                    onChange={handleSort}
                >
                    <MenuItem value={"asc"}>Preis aufsteigend</MenuItem>
                    <MenuItem value={"desc"}>Preis absteigend</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default SortAndFilter;