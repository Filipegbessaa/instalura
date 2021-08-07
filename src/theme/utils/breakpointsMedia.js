import { css } from "styled-components"
import breakpoints from "../breakpoints";


export default (cssByBreakpoints) => {
    const breakpointsNames = Object.keys(cssByBreakpoints)
    return breakpointsNames.map((breakpointsName) => css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
                ${cssByBreakpoints[breakpointsName]}
            }
        `)
}