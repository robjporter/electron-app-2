import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        accent: {50: "#ede4d3",100: "#fbe3b2",200: "#f6d086",300: "#f1be58",400: "#eca419",500: "#d49212",600: "#a5710b",700: "#775105",800: "#483100",900: "#1d0f00",},
        ciscoBlue: {50: '#D0EDF9',100: '#BEE6F7',200: '#99D8F3',300: '#75CAEF',400: '#50BCEA',500: '#2CAEE6',600: '#178FC3',700: '#116A91',800: '#0B455F',900: '#05212C'},
        lime: {50: '#f4fce3',100: '#e9fac8',200: '#d8f5a2',300: '#c0eb75',400: '#a9e34b',500: '#94d82d',600: '#82c91e',700: '#74b816',800: '#66a80f',900: '#5c940d'},
        grape: {50: '#f8f0fc',100: '#f3d9fa',200: '#eebefa',300: '#e599f7',400: '#da77f2',500: '#cc5de8',600: '#be4bdb',700: '#ae3ec9',800: '#9c36b5',900: '#862e9c'},
        brightPink: { 50:'#F0BBDD', 100:'#ED9BCF', 200:'#EC7CC3', 300:'#ED5DB8', 400:'#F13EAF', 500:'#F71FA7', 600:'#FF00A1', 700:'#E00890', 800:'#C50E82', 900:'#AD1374'},    
    },
    fontSizes: {
        xxs: '0.625rem'
    },
    // I'm creating a new space tokens since the default is represented with numbers
    space: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
    },
    components: {
    Button: {
        sizes: {
            xl: {
                h: '56px',
                fontSize: 'xl',
                px: '32px'
            }
        },
    }
    }
})

theme.colors.brand = theme.colors.brightPink;

export { theme }