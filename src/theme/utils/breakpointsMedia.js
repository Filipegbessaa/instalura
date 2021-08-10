import { css } from "styled-components"
import breakpoints from "../breakpoints";


function breakpointsMedia(cssByBreakpoints) {
    const breakpointsNames = Object.keys(cssByBreakpoints)
    return breakpointsNames.map((breakpointsName) => css`
            @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
                ${cssByBreakpoints[breakpointsName]}
            }
        `)
}

export default breakpointsMedia