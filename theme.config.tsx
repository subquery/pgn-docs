import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  primaryHue: 100,
  logo: (
    <div style={{ height: 40, display: "flex", gap: 8, alignItems: "center" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 573 252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6.72266"
          y="6.29492"
          width="559.366"
          height="239.208"
          fill="black"
          stroke="black"
          stroke-width="12"
        />
        <path
          d="M118.335 121.163H146.524C150.683 121.163 154.688 120.854 158.539 120.238C162.39 119.622 165.779 118.467 168.706 116.772C171.633 114.924 173.943 112.382 175.638 109.147C177.486 105.913 178.41 101.677 178.41 96.4392C178.41 91.2019 177.486 86.9658 175.638 83.731C173.943 80.4961 171.633 78.0315 168.706 76.3371C165.779 74.4886 162.39 73.2563 158.539 72.6401C154.688 72.024 150.683 71.7159 146.524 71.7159H118.335V121.163ZM82.0586 43.5266H156.46C166.78 43.5266 175.561 45.067 182.8 48.1478C190.04 51.0746 195.894 55.0026 200.361 59.9319C204.982 64.8611 208.294 70.4836 210.297 76.7992C212.453 83.1148 213.531 89.6615 213.531 96.4392C213.531 103.063 212.453 109.61 210.297 116.079C208.294 122.395 204.982 128.017 200.361 132.947C195.894 137.876 190.04 141.881 182.8 144.962C175.561 147.888 166.78 149.352 156.46 149.352H118.335V208.503H82.0586V43.5266Z"
          fill="white"
        />
        <path
          d="M325.362 189.787C318.893 198.105 311.73 203.959 303.874 207.348C296.018 210.583 288.085 212.2 280.075 212.2C267.443 212.2 256.045 210.043 245.878 205.73C235.865 201.263 227.393 195.179 220.461 187.477C213.53 179.775 208.215 170.763 204.518 160.443C200.821 149.968 198.973 138.723 198.973 126.708C198.973 114.385 200.821 102.986 204.518 92.5112C208.215 81.8825 213.53 72.6401 220.461 64.7841C227.393 56.9281 235.865 50.7665 245.878 46.2994C256.045 41.8322 267.443 39.5986 280.075 39.5986C288.547 39.5986 296.711 40.908 304.567 43.5266C312.577 45.9913 319.74 49.6882 326.055 54.6175C332.525 59.5468 337.84 65.6313 341.999 72.8712C346.158 80.111 348.699 88.4292 349.624 97.8256H314.965C312.808 88.5832 308.649 81.6514 302.487 77.0302C296.326 72.4091 288.855 70.0985 280.075 70.0985C271.911 70.0985 264.979 71.7159 259.279 74.9507C253.58 78.0315 248.959 82.2676 245.416 87.659C241.873 92.8963 239.254 98.9039 237.56 105.682C236.019 112.459 235.249 119.468 235.249 126.708C235.249 133.64 236.019 140.418 237.56 147.041C239.254 153.511 241.873 159.364 245.416 164.602C248.959 169.839 253.58 174.075 259.279 177.31C264.979 180.391 271.911 181.931 280.075 181.931C292.09 181.931 301.332 178.927 307.802 172.92C314.426 166.758 318.277 157.901 319.355 146.348H282.847V119.314H352.165V208.503H329.059L325.362 189.787Z"
          fill="white"
        />
        <path
          d="M351.423 43.5266H387.468L456.324 154.204H456.786V43.5266H490.752V208.503H454.476L385.851 98.0566H385.389V208.503H351.423V43.5266Z"
          fill="white"
        />
      </svg>
      DOCS
    </div>
  ),
  project: {
    link: "https://github.com/supermodularxyz/pgn-docs",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/supermodularxyz/pgn-docs",
  footer: {
    text: "PGN Docs",
  },
};

export default config;
