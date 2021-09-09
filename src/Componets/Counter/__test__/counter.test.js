import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Counter } from "../counter";

let getByTestId;
beforeEach(()=>{
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})

test("header", () => {
    const testElement = getByTestId("header");
    // const testElementTitle = getByTestId("title");

    expect(testElement.textContent).toBe("It's a Counter.");
    // expect(testElementTitle.textContent).toBe("It's a Title.");
});

// test("title", () => {
//     const testElement = getByTestId("title");

//     expect(testElement.textContent).toBe("It's a Title.");
// })

test("counter initally start with text of 0", () => {
    const testElement = getByTestId("count");

    expect(testElement.textContent).toBe("0");
});

test("counter add btn +", () => {
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
});

test("counter sub btn -", () => {
    const subBtn = getByTestId("sub-btn");

    expect(subBtn.textContent).toBe("-");
});

test("count input must be start 0", () => {
    const countInput = getByTestId("count-input");

    expect(countInput.value).toBe("1");
});

test("change input value", () => {
    const countInput = getByTestId("count-input");

    expect(countInput.value).toBe("1");

    fireEvent.change(countInput, {
        target: {
            value: "5"
        }
    });

    expect(countInput.value).toBe("5");
});

test("click on + btn", () => {
    const addBtn = getByTestId("add-btn");
    const count = getByTestId("count");

    expect(count.textContent).toBe("0");

    fireEvent.click(addBtn);

    expect(count.textContent).toBe("1");
});

test("click on + btn", () => {
    const subBtn = getByTestId("sub-btn");
    const count = getByTestId("count");

    expect(count.textContent).toBe("0");

    fireEvent.click(subBtn);

    expect(count.textContent).toBe("-1");
});

test("change input then click add btn", () => {
    const countInput = getByTestId("count-input");
    const addBtn = getByTestId("add-btn");
    const count = getByTestId("count");

    expect(count.textContent).toBe("0");

    fireEvent.change(countInput, {
        target: {
            value: "5"
        }
    });
    fireEvent.click(addBtn);

    expect(count.textContent).toBe("5");
});

test("change input then click sub btn", () => {
    const countInput = getByTestId("count-input");
    const subBtn = getByTestId("sub-btn");
    const count = getByTestId("count");

    expect(count.textContent).toBe("0");

    fireEvent.change(countInput, {
        target: {
            value: 5
        }
    });

    fireEvent.click(subBtn);

    expect(count.textContent).toBe("-5");
});

test("adding then subtracting leads to the correct counter number", () => {
    const countInput = getByTestId("count-input");
    const count = getByTestId("count");
    const subBtn = getByTestId("sub-btn");
    const addBtn = getByTestId("add-btn");

    fireEvent.change(countInput, {
        target: {
            value: 10
        }
    });

    for (let i = 0; i < 4; i++) {
        fireEvent.click(addBtn);
    }

    for (let i = 0; i < 5; i++) {
        fireEvent.click(subBtn);
    }

    expect(count.textContent).toBe("-10");
});

test("counter contains correct class name", () => {
    const countInput = getByTestId("count-input");
    const count = getByTestId("count");
    const subBtn = getByTestId("sub-btn");
    const addBtn = getByTestId("add-btn");


    expect(count.className).toBe("");

    fireEvent.change(countInput, {
        target: {
            value: 50
        }
    });

    fireEvent.click(addBtn);
    expect(count.className).toBe("");

    fireEvent.click(addBtn);
    expect(count.className).toBe("green");

    fireEvent.click(addBtn);
    expect(count.className).toBe("green");


    fireEvent.click(subBtn);
    expect(count.className).toBe("green");

    
    
    fireEvent.click(subBtn);
    expect(count.className).toBe("");

    fireEvent.click(subBtn);
    expect(count.className).toBe("");

    fireEvent.click(subBtn);
    expect(count.className).toBe("");

    fireEvent.click(subBtn);
    expect(count.className).toBe("red");


})