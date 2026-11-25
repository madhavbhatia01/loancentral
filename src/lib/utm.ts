export function getCredit91ApplyUrl(
  campaign = "loancentral_website",
  extraParams?: Record<string, string | number | undefined>
): string {
  const url = new URL("https://apply.credit91.com");
  url.searchParams.set("utm_source", "loancentral");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", campaign);

  if (extraParams) {
    for (const [key, val] of Object.entries(extraParams)) {
      if (val !== undefined && val !== "") {
        url.searchParams.set(key, String(val));
      }
    }
  }

  return url.toString();
}
