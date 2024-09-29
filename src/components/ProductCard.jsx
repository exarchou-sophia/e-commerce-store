import { Button } from "./Button";

export const ProductCard = item => (
    <div>
        <p>{item.id}</p>
        <p>{item.title}</p>

        <Button
            title="remove"
            onClicked={item.onClicked}
        />
    </div>
)