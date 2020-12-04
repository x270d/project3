import React, { useEffect, useState } from 'react'
import {
    Grid, Typography, Button, TextField, FormControl, MenuItem,
    InputAdornment, OutlinedInput, FormHelperText, Select, Hidden
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import CaretDown from './icon/CaretDown'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import IconUpload from './icon/IconUpload'
import TransitionsModal from './Modal'


const useStyles = makeStyles(theme => ({
    btnUpload: {
        height: 56,
        fontSize: 20,
        zIndex: 3,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: 130,
        "&:hover": {
            backgroundColor: '#fff'
        },
        '@media (max-width:768px)': {
            minWidth: 55,
            width: 55
        }
    },
    inputFile: {
        paddingRight: 0,
        position: 'relative',
    },
    nameUpload: {
        maxWidth: 200,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        position: 'absolute',
        left: 0,
        top: '50%',
        marginTop: -8,
        paddingLeft: 18,
        color: '#222',
        fontSize: 16
    },
    inputText: {
        marginBottom: 38,
        position: 'relative'
    },
    iconDropDown: {
        pointerEvents: 'none',
        right: 0,
        top: '50%',
        marginTop: -3,
        position: 'absolute',
        marginRight: 12,
    },
    submitBtn: {
        marginTop: 62
    },
    option: {
        minHeight: 48,
        "&:hover": {
            backgroundColor: '#fce2cc'
        }
    }
}))

const MAX_PHOTO_SIZE = 5242880;

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must have a character")
        .max(60, "Must have less 60")
        .required("Must enter a name"),
    email: Yup.string()
        .email("Must have a valid email")
        .max(255, "Must have less 255")
        .required("Must enter a email"),
    select: Yup.string()
        .required('Select is required!'),
    file: Yup.mixed()
        .required("A file is required")
        .test(
            "fileSize",
            "File too large",
            value => value && value.size <= MAX_PHOTO_SIZE)
        .test('fileSizes', 'Resolution at least 70x70px', value => {
              if (value) {
                return new Promise(resolve => {
                    const img = new Image();
                    img.onload = () => resolve(img.width >= 70 && img.height >= 70);
                    img.src = window.URL.createObjectURL(value);
                });
            }
        })
        .test('fileFormat', 'jpg/jpeg only', (value) => {
            return value && ['image/jpeg'].includes(value.type);
        })
})

const validatePhone = (value) => {
    let error
    if (!value) {
        error = "Required"
    } else if (value.replace(/[^+0-9]/g, '').length < 13) {
        error = 'Enter valid phone number'
    }
    return error
}

const MyInput = ({ field, form, ...props }) => {
    return (
        <NumberFormat
            {...field}
            {...props}
            customInput={TextField}
            format="+38 (0##) ### ## ##"
            mask="_"
            fullWidth
            label="Phone"
            variant="outlined"
            placeholder="+38 (0__) ___ __ __"
            InputLabelProps={{
                shrink: true
            }}
        />
    );
};


export default function SignUp() {
    const [positions, setPositions] = useState([])
    const [open, setOpen] = React.useState(false);
    const [token, setToken] = React.useState('');
    const [errorText, setErrorText] = useState('')

    useEffect(() => {

        const fetchToken = () => {
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setToken(data.token)
                })
                .catch(function (error) {
                    setTimeout(fetchToken(), 5000)
                });
        }
        fetchToken()
    }, [])

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    setPositions(data.positions)
                } else {
                    setPositions([
                        { "id": 1, "name": "Lawyer" },
                        { "id": 2, "name": "Content manager" },
                        { "id": 3, "name": "Security" },
                        { "id": 4, "name": "Designer" }
                    ])
                }
            })
    }, [])

    const postRequest = (values) => {
        var formData = new FormData();
        formData.append('position_id', values.select);
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('photo', values.file);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
                'Token': token,
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    setErrorText('')
                    setOpen(true)
                } else {
                    console.log("else", data);
                    setErrorText(data.message)
                    setOpen(true)
                }
            })
            .catch(function (error) {
                setErrorText('Bad request')
                console.log("error", error)
            });
    }

    const classes = useStyles()

    const InputFile = ({ form, field, ...props }) => (
        <OutlinedInput
            {...props}
            name={field.name}
            className={classes.inputFile}
            id="input-file"
            onChange={e => form.setFieldValue(field.name, e.target.files[0])}
            type="file"
            variant="outlined"
        />
    )

    return (
        <div className="sign-up" id="sign-up">
            <div className="sign-up-title">
                <Grid container justify="center">
                    <Grid lg={6} item >
                        <Typography variant="h2" align="center" style={{ padding: 0 }} component="h2" gutterBottom>
                            Register to get a work
                    </Typography>
                    </Grid>
                    <Grid xl={8} lg={12} item >
                        <Typography variant="h5" align="center" component="h5" >
                            Attention! After successful registration and alert, update the list
                            of users in the block from the top
                    </Typography>
                    </Grid>
                </Grid>
            </div>
            <TransitionsModal
                open={open}
                errorText={errorText}
                handleClose={handleClose}
            />
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    select: "",
                    file: ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    for (let key in values) {
                        if (key === 'phone') {
                            values[key] = values[key].replace(/[^+0-9]/g, '')
                        }
                    }
                    postRequest(values)

                    resetForm()
                }}
            >
                {({ values, errors, dirty, touched, isSubmitting, handleBlur }) => (
                    <Form className="form-container" >
                        <Grid container justify="center">
                            <Grid item xs={12} md={4}>
                                <Field
                                    fullWidth
                                    as={TextField}
                                    label="Name"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    variant="outlined"
                                    className={classes.inputText}
                                    error={errors.name && touched.name}
                                    helperText={(errors.name && touched.name) && errors.name}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Field
                                    fullWidth
                                    label="Email"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    variant="outlined"
                                    error={errors.email && touched.email}
                                    helperText={(errors.email && touched.email) && errors.email}
                                    as={TextField}
                                    className={classes.inputText}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Field
                                    component={MyInput}
                                    name="phone"
                                    validate={validatePhone}
                                    type="tel"
                                    onBlur={handleBlur}
                                    value={values.phone}
                                    className={classes.inputText}
                                    error={errors.phone && touched.phone}
                                    helperText={errors.phone && touched.phone && errors.phone}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined" className={classes.inputText}>
                                    <Field as={Select}
                                        name="select"
                                        fullWidth
                                        style={{ position: 'relative' }}
                                        displayEmpty
                                        variant="outlined"
                                        error={errors.select && touched.select}
                                        aria-describedby="component-select"
                                        inputProps={{
                                            IconComponent: () => <CaretDown
                                                className={classes.iconDropDown} />
                                        }}
                                    >
                                        <MenuItem value="" >
                                            Select your position
                                    </MenuItem>
                                        {positions.map(pos => (
                                            <MenuItem
                                                key={pos.id}
                                                className={classes.option}
                                                value={pos.id}
                                            >{pos.name}</MenuItem>
                                        ))}
                                    </Field>
                                    <FormHelperText error={errors.select && touched.select} id="component-select">
                                        {errors.select && touched.select && errors.select}
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined">
                                    <Field
                                        component={InputFile}
                                        name="file"
                                        aria-describedby="component-helper-text"
                                        error={errors.file && touched.file}
                                        onBlur={handleBlur}
                                        className={classes.inputText}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <label htmlFor="input-file">
                                                    <Button
                                                        className={classes.btnUpload}
                                                        color="primary"
                                                        variant="outlined"
                                                        aria-label="Upload"
                                                        component="span">
                                                        <Hidden only={['sm', 'xs']}>
                                                            Upload
                                                        </Hidden>
                                                        <Hidden only={['lg', 'xl', 'md']}>
                                                            <IconUpload />
                                                        </Hidden>
                                                    </Button>
                                                </label>
                                            </InputAdornment>
                                        }
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <label className={classes.nameUpload} htmlFor="input-file">
                                                    {values.file ? values.file.name : 'Upload your photo'}
                                                </label>
                                            </InputAdornment>
                                        }
                                    />
                                    <FormHelperText error={errors.file && touched.file} id="component-helper-text">
                                        <span style={{ display: 'block' }}>{errors.file && touched.file && errors.file}</span>
                                        File format jpg up to 5 MB, the minimum size of 70x70px
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Button
                                className={classes.submitBtn}
                                size="large"
                                disabled={isSubmitting || !dirty}
                                variant="contained"
                                color="primary"
                                type="submit"
                                aria-label="submit"
                            >
                                Sign up
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div >
    )
}
