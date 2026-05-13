export async function GET() {
  return Response.json({
    data: {
      apiDocs:
        "https://nextjs.org/docs/app/api-reference/file-conventions/route",
    },
  });
}
