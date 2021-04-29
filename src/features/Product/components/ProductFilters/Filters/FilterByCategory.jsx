import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import categoryApi from "../../../../../api/categoryApi";

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange = null }) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await categoryApi.getAll();
                console.log(response[0].name);
                setCategoryList(response);
            } catch (error) {
                console.log("Failed to fetch category list" + error);
            }
        })();
    }, []);

    // handle selection
    const selectStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            marginTop: "16px",
            width: "150px",
            border: "1px solid $grey-color-light",
            borderRadius: "20px",
            padding: "0 10px",

            "&:hover": {
                borderColor: "unset",
                boxShadow: "none",
            },
        }),
        option: (styles) => {
            return {
                ...styles,
            };
        },
        indicatorSeparator: (styles) => {
            return {
                ...styles,
                width: "0px",
            };
        },
    };

    const handleSelectChange = (value) => {
        console.log(value.id);
        if (onChange) onChange(value.id);
    };

    console.log(categoryList);

    return (
        <>
            <Select
                options={categoryList}
                getOptionLabel={(option) => option.name}
                styles={selectStyles}
                placeholder="Danh Mục"
                onChange={handleSelectChange}
            />
        </>
    );
}

export default FilterByCategory;

// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";
// import React, { useEffect, useState } from "react";
// import categoryApi from "../../../../../api/categoryApi";

// FilterByCategory.propTypes = {
//     onChange: PropTypes.func,
// };

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));

// function FilterByCategory({ onChange = null }) {
//     const classes = useStyles();
//     const [categoryValue, setCategoryValue] = useState("");
//     const [categoryList, setCategoryList] = useState([]);

//     const handleChange = (event) => {
//         console.log(event.target.value);
//         setCategoryValue(event.target.value);

//         if (onChange) onChange(event.target.value);
//     };

//     useEffect(() => {
//         (async () => {
//             try {
//                 const response = await categoryApi.getAll();
//                 console.log(response);
//                 setCategoryList(response);
//             } catch (error) {
//                 console.log("Failed to fetch category list" + error);
//             }
//         })();
//     }, []);

//     return (
//         <>
//             <FormControl className={classes.formControl}>
//                 <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={categoryValue}
//                     onChange={handleChange}
//                     MenuProps={{
//                         anchorOrigin: {
//                             vertical: "bottom",
//                             horizontal: "left",
//                         },
//                         transformOrigin: {
//                             vertical: "top",
//                             horizontal: "left",
//                         },
//                         getContentAnchorEl: null,
//                     }}
//                 >
//                     {categoryList.map((category) => (
//                         <MenuItem key={category.id} value={category.id}>
//                             {category.name}
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </>
//     );
// }

// export default FilterByCategory;
