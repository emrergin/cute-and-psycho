export async function GET() {
    return new Response(
      `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
            <loc>https://www.senaergin.com/</loc>
            <lastmod>2022-12-18T11:58:39+00:00</lastmod>
            <priority>1.00</priority>
        </url>
        <url>
            <loc>https://www.senaergin.com/posts</loc>
            <lastmod>2022-12-18T11:58:39+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://www.senaergin.com/posts/c678547b-24bd-4fc3-a79e-404c47a1bd45</loc>
            <lastmod>2022-12-18T11:58:39+00:00</lastmod>
            <priority>0.60</priority>
        </url>
        <url>
            <loc>https://www.senaergin.com/posts/630296d5-3d18-4e38-8e30-e74356ed2e4c</loc>
            <lastmod>2022-12-18T11:58:39+00:00</lastmod>
            <priority>0.60</priority>
        </url>
        <url>
            <loc>https://www.senaergin.com/posts/3af2904c-b059-4377-8022-9c90e877b55f</loc>
            <lastmod>2022-12-18T11:58:39+00:00</lastmod>
            <priority>0.60</priority>
        </url>
      </urlset>`.trim(),
      {
        headers: {
          'Content-Type': 'application/xml'
        }
      }
    );
  }