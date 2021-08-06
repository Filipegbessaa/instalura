import { breakpoints } from "../breakpoints";
import { css } from "styled-components"


export const breakpointsMedia = (cssByBreakpoints) => {
    const breakpointsNames = Object.keys(cssByBreakpoints)
    return breakpointsNames.map((breakpointsName) => {
        return css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
                ${cssByBreakpoints[breakpointsName]}
            }
        `
    })
}