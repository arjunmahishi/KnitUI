import { ReactNode } from "react"
import styled, { css, keyframes } from "styled-components"
import { AlertContainerProps, AlertContentWrapperProps } from "./AlertInterface"
import {
  Magenta80,
  Yellow80,
  Green80,
  Crimson80,
  Neutral10,
  Neutral0,
} from "../../common/styles/palette"
import Icon from "../Icon/index"

const getWidth = (size: string) => {
  switch (size) {
    case "x-small":
      return 280
    case "small":
      return 350
    case "medium":
      return 490
    case "large":
      return 770
    default:
      return 350
  }
}

const getBackground = (type: string) => {
  switch (type) {
    case "standard":
      return Magenta80.hex
    case "warning":
      return Yellow80.hex
    case "success":
      return Green80.hex
    case "error":
      return Crimson80.hex
    default:
      return Magenta80.hex
  }
}

export const AlertContainer = styled.div<AlertContainerProps>`
  width: ${({ size }) => getWidth(size)}px;
  background: ${({ type }) => getBackground(type)};
  border-radius: 4px;
  border: 1px solid ${({ type }) => getBackground(type)}
  box-sizing: border-box;
  color: ${Neutral10.hex};
  display: flex;
  padding: 14px 14px 14px 0;
  margin: 5px 0;
  overflow: hidden;
  opacity: 1;
  transition: all 1s;

  &.hide{
    opacity: 0;
  }
`

export const AlertContentWrapper = styled.div<AlertContentWrapperProps>`
  display: flex;
  margin-left: 1.4rem;
  flex-direction: ${({ heading, multiLine }) =>
    heading && multiLine ? "column" : "row"};
  justify-content: space-between;
  width: 100%;
`

export const AlertContent = styled.div<{
  children: ReactNode
  multiLine?: boolean
}>`
  font-size: 1.4rem;
  line-height: 2rem;
  font-family: InterRegular;
  color: ${({ multiLine }) => (multiLine ? "#DDD1E0" : Neutral10.hex)};
`

export const StyledAlertIcon = styled(Icon).attrs(props => ({
  width: "20px",
  height: "20px",
}))`
  margin: ${({ multiLine }) => (multiLine ? "2px" : 0)} 0 2px 14px;
`

export const CloseIcon = styled(Icon).attrs(props => ({
  type: "oClose",
  fill: Neutral0.hex,
}))`
  padding-left: 14px;
  cursor: pointer;
`

export const AlertHeading = styled.div`
  font-family: InterRegular;
  font-size: 1.8rem;
  line-height: 24px;
`

export const StyledAlertPicture = styled.img<{
  multiLine: boolean | undefined
}>`
  min-width: 20px;
  height: 20px;
  border-radius: 12px;
  margin: ${({ multiLine }) => (multiLine ? "2px" : 0)} 0 2px 14px;
`

export const StyledAlertAction = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  line-height: 20px;
  cursor: pointer;
`

export const AlertActionsWrapper = styled.div<{
  multiLine: boolean | undefined
}>`
  margin: ${({ multiLine }) => (multiLine ? "18px" : 0)} 3px 0 0;
  display: flex;
  div:not(:last-child) {
    margin-right: 29px;
  }
`