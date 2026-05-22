Deno.serve(async (req) => {

    const body = await req.json();

    const target = body.url;
    const method = body.method || "GET";

    const headers = body.headers || {};

    let response;

    try {

        response = await fetch(target, {
            method,
            headers
        });

        const text = await response.text();

        return Response.json({
            ok: true,
            status: response.status,
            body: text
        });

    } catch (err) {

        return Response.json({
            ok: false,
            error: err.toString()
        });

    }

});