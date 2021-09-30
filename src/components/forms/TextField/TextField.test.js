/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '../../../infra/test/testUtils';

import TextField from "./index";


describe('<TextField />', () => {
    test('Renders a text field', () => {
        render(
            <TextField
                placeholder="Nome"
                name="nome"
                value="Filipe"
                onChange={() => { }}
            />
        );
        // screen.debug()

        const textField = screen.getByPlaceholderText(/nome/i)
        console.log(textField)
        expect(textField).toMatchSnapshot();
    })
});