import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Rating({ value = 0, count = 0 }) {
  const rounded = Math.round(value);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {[...Array(5)].map((_, i) =>
        i < rounded ? (
          <StarIcon key={i} sx={{ color: "#f0c14b", fontSize: 18 }} />
        ) : (
          <StarBorderIcon key={i} sx={{ color: "#f0c14b", fontSize: 18 }} />
        )
      )}
      <span style={{ fontSize: 12 }}>({count})</span>
    </div>
  );
}

export default Rating;
