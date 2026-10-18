import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function NotFoundPage() {
  useDocumentMeta({ title: "Сторінку не знайдено | Промислова автоматизація" });

  return (
    <section className="contact">
      <h1 className="page-title">Сторінку не знайдено</h1>
      <p className="section-sub">Можливо, адреса введена з помилкою або сторінку видалено.</p>
      <div className="hero-actions">
        <Link to="/" className="btn">На головну</Link>
      </div>
    </section>
  );
}