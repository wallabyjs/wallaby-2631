import React from 'react';
import {render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

describe("Troubleshooting tests", () => {
    it("it can render as expected", () => {
        let dropdownLabel = "label for the dropdown";
        act(() => {
            render(<>
                <label htmlFor="dropdown01">
                    {dropdownLabel}
                </label>
                <select id="dropdown01">
                    <option id="dropDownOption-1-0" value="">
                        Option 01
                    </option>
                    <option id="dropDownOption-1-1" value="foo">
                        Option 02
                    </option>
                </select>
            </>)
        });

        let select = screen.getByLabelText(dropdownLabel) as HTMLSelectElement;
        expect(select).toBeTruthy();
        expect(select.item(0)?.textContent).toBe("Option 01");
        let selectOption = select.item(0) as HTMLOptionElement;
        expect(selectOption).toBeTruthy();
        expect(selectOption.label).toBe("Option 01");
    });
});