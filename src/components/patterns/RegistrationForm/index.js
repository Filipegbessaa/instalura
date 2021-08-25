// import { set } from 'lodash'
import React, { useState } from 'react'
import { Lottie } from '@crello/react-lottie';
import successAnimation from './animations/success.json'
import errorAnimation from './animations/error.json'
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/Layout/Box';
import { Grid } from '../../foundation/Layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
};

export function FormContent() {
    const [isFormSubmited, setIsFormSubmited] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
    const [userInfo, setUserInfo] = useState({
        userName: 'filipeabessa',
        name: 'Filipe Bessa',
    })

    const handleChange = (event) => {
        const fieldName = event.target.getAttribute('name')
        setUserInfo({
            ...userInfo,
            [fieldName]: event.target.value,
        })
    }

    const isFormInvalid = userInfo.userName.length === 0 || userInfo.name.length === 0


    return (
        <form onSubmit={(event) => {
            event.preventDefault()

            setIsFormSubmited(true);

            // Data Transfer Object
            const userDTO = {
                username: userInfo.userName,
                name: userInfo.name,
            };

            fetch('https://instalura-api.vercel.app/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDTO),
            })
                .then((respostaDoServidor) => {
                    if (respostaDoServidor.ok) {
                        return respostaDoServidor.json();
                    }

                    throw new Error('Não foi possível cadastrar o usuário agora :(');
                })
                .then((respostaConvertidaEmObjeto) => {
                    setSubmissionStatus(formStates.DONE);
                    // eslint-disable-next-line no-console
                    console.log(respostaConvertidaEmObjeto);
                })
                .catch((error) => {
                    setSubmissionStatus(formStates.ERROR);
                    // eslint-disable-next-line no-console
                    console.error(error);
                });
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
                    placeholder="Nome"
                    name="name"
                    value={userInfo.nome}
                    onChange={handleChange} />
                <TextField
                    placeholder="Usuário"
                    name="userName"
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
                {isFormSubmited && submissionStatus === formStates.DONE && (
                    <Box>
                        <Lottie
                            width="150px"
                            height="150px"
                            config={{ animationData: successAnimation, loop: true, autoplay: true }}
                        />
                        {/* https://lottiefiles.com/43920-success-alert-icon */}
                    </Box>
                )}

                {isFormSubmited && submissionStatus === formStates.ERROR && (
                    <Box
                        display="flex"
                        justifyContent="center"
                    >
                        <Lottie
                            width="150px"
                            height="150px"
                            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
                        />
                        {/* https://lottiefiles.com/43920-success-alert-icon */}
                    </Box>
                )}
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

