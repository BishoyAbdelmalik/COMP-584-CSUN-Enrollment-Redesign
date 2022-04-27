const ClassCompact = ({ id, name, units }) => {
    return (
        <div>
            <p className="h5">{id} <span>({units})</span></p>
            <p>{name}</p>
        </div>
    );
}

export default ClassCompact;