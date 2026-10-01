import { ImageResponse } from "next/og";
import { PERSON } from "@/lib/seo";

export const alt = `${PERSON.name} — ${PERSON.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card people see when the link is pasted into WhatsApp,
 * LinkedIn, X or iMessage. Generated at build time.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0D0D0F",
          backgroundImage:
            "radial-gradient(circle at 78% 112%, rgba(76,187,46,0.38) 0%, rgba(76,187,46,0) 58%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#5DC53B",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#5DC53B",
            }}
          />
          {PERSON.role}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 94,
            fontWeight: 800,
            color: "#F5F5F7",
            letterSpacing: -4,
            lineHeight: 1.04,
            marginTop: 30,
          }}
        >
          {PERSON.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "#A1A1A6",
            marginTop: 26,
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          {PERSON.tagline}.
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 46,
            flexWrap: "wrap",
          }}
        >
          {["React", "Next.js", "React Native", "Node.js", "AI"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#F5F5F7",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 999,
                padding: "10px 24px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
