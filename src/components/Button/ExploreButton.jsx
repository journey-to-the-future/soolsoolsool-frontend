import Button from '@mui/material/Button';


const ExploreButton = ({handleButtonClick, label, value}) => {
    // const { label } = props

    // const [isActive, setIsActive] = useState(true)

    const handleClick = () => {
        // toggle
        handleButtonClick()
        // console.log(value)
        // setIsActive(current => !current);

        // or set to true
        // setIsActive(true);
    };

    return (
        <Button sx={{ color: "#A6A9AA", width: "6vw" }}
            style={{
                backgroundColor: value ? '#1565c0' : '',
                color: value ? 'white' : '',
            }}
            onClick={handleClick}
            variant="outlined"
        >
            <b>{label}</b>
        </Button>
    )
}

export default ExploreButton