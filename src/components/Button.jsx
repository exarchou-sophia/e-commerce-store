/* eslint-disable react/prop-types */
// create button with styles and props
export const Button = props => (
    <button
        type="button"
        style={props.style}
        className={`bg-lime-400 hover:bg-button-hover text-white p-2 m-2 max-w-max rounded-md ${props.className}`}
        onClick={props.onClick}
    >
        {props.title}
    </button>
);

export const ButtonUsageExample = () => (
    <div>
        {/* example one */}
        <Button
            style={{
                backgroundColor: "red"
            }}
            title="send data"
        />

        {/* example two with click action */}
        <Button
            style={{
                color: "white"
            }}
            title="send data"
            onClicked={() => {
                console.log("I was pressed");
            }}
        />
    </div>
)