import { render, screen, fireEvent } from "@testing-library/react";
import { VideoPlayer } from "../components/VideoPlayer";

describe("VideoPlayer", () => {
  it("спочатку показує лише кнопку відтворення, без відео", () => {
    const { container } = render(
      <VideoPlayer title="Лінія" poster="/p.png" video={{ src: "/videos/a.mp4" }} />
    );

    expect(screen.getByRole("button", { name: "Дивитися відео: Лінія" })).toBeInTheDocument();
    expect(container.querySelector("video")).toBeNull();
    expect(container.querySelector("iframe")).toBeNull();
  });

  it("клік запускає власне відео з елементами керування", () => {
    const { container } = render(
      <VideoPlayer title="Лінія" poster="/p.png" video={{ src: "/videos/a.mp4" }} />
    );
    fireEvent.click(screen.getByRole("button", { name: /Дивитися відео/ }));

    const video = container.querySelector("video");
    expect(video).toHaveAttribute("src", "/videos/a.mp4");
    expect(video).toHaveAttribute("controls");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("клік запускає YouTube без cookies і з підписом", () => {
    const { container } = render(
      <VideoPlayer title="Лінія" video={{ youtubeId: "abcdefghijk" }} />
    );
    fireEvent.click(screen.getByRole("button", { name: /Дивитися відео/ }));

    const iframe = container.querySelector("iframe");
    expect(iframe.getAttribute("src")).toContain("youtube-nocookie.com/embed/abcdefghijk");
    expect(iframe.title).toContain("Лінія");
  });
});