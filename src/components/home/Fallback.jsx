const Fallback = ({ error, resetErrorBoundary }) => {
    return (
        <>
            <div role="alert">
                <p>Something went wrong:</p>
                <pre className='fs-3 fw-bold napoleonRedColor'>{error.message}</pre>
            </div>
        </>
    );
}

export default Fallback