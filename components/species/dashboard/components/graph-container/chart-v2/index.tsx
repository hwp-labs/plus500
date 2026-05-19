import { useChartV2 } from "./hook";

export const ChartV2 = () => {
  const { wrapRef, canvasRef, handleMouseMove, handleMouseLeave, tooltip } =
    useChartV2();

  return (
    <div
      ref={wrapRef}
      style={{ position: "relative", width: "100%", height: 420 }}
    >
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: "block", cursor: "crosshair" }}
      />

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "absolute",
            left: Math.min(
              tooltip.x + 16,
              (wrapRef.current?.clientWidth ?? 500) - 200,
            ),
            top: Math.max(tooltip.y - 80, 10),
            background: "#4b82ca",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 6,
            padding: "10px 14px",
            fontSize: 13,
            color: "#fff",
            pointerEvents: "none",
            minWidth: 190,
          }}
          className="[&>div:nth-child(odd)]:bg-[#6493d0]"
        >
          <div
            style={{
              marginBottom: 6,
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Date/Time:</span>
            <strong>9/14 {tooltip.candle.time}</strong>
          </div>
          {[
            ["Close", tooltip.candle.close],
            ["Open", tooltip.candle.open],
            ["High", tooltip.candle.high],
            ["Low", tooltip.candle.low],
          ].map(([label, val]) => (
            <div
              key={label as string}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 3,
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.6)" }}>{label}:</span>
              <strong>{(val as number).toFixed(2)}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
