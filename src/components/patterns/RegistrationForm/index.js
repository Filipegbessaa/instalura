// import { set } from 'lodash'
import React, { useState } from 'react'
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import Text from '../../foundation/Text';

export function FormContent() {
    const [userInfo, setUserInfo] = useState({
        userName: 'filipeabessa',
        email: 'filipegbessa@gmail.com',
    })

    const handleChange = (event) => {
        const fieldName = event.target.getAttribute('name')
        setUserInfo({
            ...userInfo,
            [fieldName]: event.target.value,
        })
    }

    const isFormInvalid = userInfo.userName.length === 0 || userInfo.email.length === 0


    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log('O formulário está pronto, vamos cadastrar de fato o usuário.')
        }}>
            <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
            >
                Pronto para saber da vida dos outros?
            </Text>
            <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                marginBottom="32px"
            >
                Você está a um passo de saber tudoo que está
                rolando no bairro, complete seu cadastro agora!
            </Text>
            <div>
                <TextField
                    placeholder="Email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange} />
                <TextField
                    placeholder="Usuário"
                    name="user"
                    value={userInfo.userName}
                    onChange={handleChange}
                />
                <Button
                    variant="primary.main"
                    type="submit"
                    disabled={isFormInvalid}
                    fullWidth
                >
                    Cadastrar
                </Button>
            </div>
        </form>
    )
}

// eslint-disable-next-line react/prop-types
function RegistrationForm({ modalProps }) {
    return (
        <Grid.Row
            marginLeft={0}
            marginRight={0}
            flex={1}
            justifyContent="flex-end"
        >
            <Grid.Col
                display="flex"
                paddingRight={{ md: '0' }}
                flex={1}
                value={{ xs: 12, md: 5, lg: 4 }}
            >
                <Box
                    boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    flex={1}
                    padding={{
                        xs: '16px',
                        md: '85px',
                    }}
                    backgroundColor="white"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...modalProps}
                >
                    <FormContent />
                </Box>
            </Grid.Col>
        </Grid.Row>
    );
}


export default RegistrationForm

