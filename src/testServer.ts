import app from "./index";

const PORT: number | string = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('listening on port 4000');
});
