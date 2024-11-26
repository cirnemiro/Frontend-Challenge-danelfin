'use server'

// @ts-ignore
const ApiErrorBoundary = async (error: string, forwardedHost: string | null, context: any) => {

    if (forwardedHost === 'string') {
        const rawResponse = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/flogsystem`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-KEY': `${process.env.NEXT_PUBLIC_API_KEY}`,
            },
            body: JSON.stringify({
                logdata: `ERROR Joi: ${error}, API: ApiErrorBoundary, Context: ${context}`
            }),
        });
        const response = await rawResponse.json();
        console.log(response);
    } else {
        console.log(error);
    }
}

export default ApiErrorBoundary;
