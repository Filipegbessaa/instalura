import React from 'react'
import { MenuWrapper } from "./styles/MenuWrapper";
import Logo from "../../../theme/Logo"
import { Button } from "../Button"
import Text from '../../foundation/Text';

function Menu() {
    const links = [
        {
            texto: "Home",
            url: '/'
        },
        {
            texto: "Perguntas frequentes",
            url: '/faq'
        },
        {
            texto: "Sobre",
            url: '/sobre'
        }
    ]
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map(link => {
                    return (
                        <li key={link.url}>
                            <Text tag="a" variant="smallestException" href={link.url}>{link.texto}</Text>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <Button ghost variant="secondary.main">Entrar</Button>
                <Button variant="primary.main">Cadastrar</Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}

export default Menu
