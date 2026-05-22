Deno.serve(async (req) => {

  try {

    const body = await req.json();

    const target = body.url;

    if (!target) {
      return Response.json({
        ok: false,
        error: "missing url"
      });
    }

    const resp = await fetch(target, {
      method: "GET",
      headers: {
        "user-agent":
          "Mozilla/5.0"
      },
      redirect: "follow"
    });

    const text = await resp.text();

    return Response.json({
      ok: true,
      status: resp.status,
      body: text
    });

  } catch(e) {

    return Response.json({
      ok: false,
      error: e.toString()
    });

  }

});