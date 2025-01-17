/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";
import { act } from "react";

describe('Login components test', () => {
    const loginServiceMock = {
        login: jest.fn()
    };
    const setTokenMock = jest.fn();

    let container: HTMLElement;

    function setup() {
        container = render(
            <LoginComponent
                loginService={loginServiceMock}
                setToken={setTokenMock}
            />
        ).container;
    }

    beforeEach(() => {
        setup();
    });

    it('should render correctly the login component', () => {
        const inputs = screen.getAllByTestId('input');

        expect(inputs).toHaveLength(3);
        expect(inputs[0].getAttribute('value')).toBe('');
        expect(inputs[1].getAttribute('value')).toBe('');
        expect(inputs[2].getAttribute('value')).toBe('Login');
    });

    it('should render correctly - query by document query', () => {
        const inputs = container.querySelectorAll('input');

        expect(inputs).toHaveLength(3);
        expect(inputs[0].getAttribute('value')).toBe('');
        expect(inputs[1].getAttribute('value')).toBe('');
        expect(inputs[2].getAttribute('value')).toBe('Login');
    });
});

