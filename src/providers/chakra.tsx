"use client"

import { extendTheme, ChakraProvider as ReactChakraProvider } from "@chakra-ui/react";

export const chakra_theme_color = "blue";

export const chakra_theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    components: {
        Input: {
            defaultProps: {
                focusBorderColor: chakra_theme_color + ".500"
            }
        },
        Textarea: {
            defaultProps: {
                focusBorderColor: chakra_theme_color + ".500"
            }
        },
        Button: {
            baseStyle: {
                fontFamily: "system-ui, sans-serif"
            }
        },
        Link: {
            baseStyle: {
                '&:hover': {
                    textDecoration: "none"
                },
            },
        },
    }
})

export function ChakraProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactChakraProvider theme={chakra_theme}>
            {children}
        </ReactChakraProvider>
    )
}