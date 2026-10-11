import { formatPrice, toBengaliNumber, getUnitBn, type Product } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const products: Product[] = Array.isArray(data) ? data : data?.data || [];
    return products.find((p) => p.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Calculate Min, Max, and Average prices across all markets
  const markets = product.markets || [];
  const allMins = markets.map((m) => m.min);
  const allMaxs = markets.map((m) => m.max);
  
  const minPrice = allMins.length > 0 ? Math.min(...allMins) : product.today;
  const maxPrice = allMaxs.length > 0 ? Math.max(...allMaxs) : product.today;
  
  // Calculate average for each market and overall average
  const calculatedAvg = markets.length > 0
    ? Math.round(markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length)
    : product.today;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/*  হোম > চাল > বাটম সাইজ চাল */}
      <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:underline">হোম</Link>
        <span>›</span>
        <Link href={`/category/${product.category}`} className="hover:underline">{product.categoryNameBn || product.category}</Link>
        <span>›</span>
        <span className="text-gray-800 font-medium">{product.nameBn}</span>
      </div>

      {/* Top Product Summary Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl border">
            {product.image || "📦"}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.nameBn}
            </h1>
            <p className="text-gray-500 text-sm mt-0.5">
              {getUnitBn(product.unit)} • {product.categoryNameBn}
            </p>
            <p className="text-gray-600 text-xs mt-1">
              গতকলের তুলনায় আজ দাম{" "}
              <span className={product.change?.dir === "up" ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}>
                {product.change?.dir === "up" ? "বেড়েছে" : product.change?.dir === "down" ? "কমেছে" : "পরিবর্তন হয়নি"}
              </span>{" "}
              — {toBengaliNumber(Math.abs(product.change?.pct || 0).toFixed(1))}%
            </p>
          </div>
        </div>

        {/* Today's Price Box on the right */}
        <div className="bg-gray-50 border border-gray-200/60 rounded-xl px-6 py-3 text-right min-w-[160px]">
          <p className="text-xs text-gray-400 font-medium">আজকের দাম</p>
          <p className="text-2xl font-bold text-gray-900">
            {formatPrice(product.today)}
          </p>
          <p className="text-xs text-gray-500">টাকা / {getUnitBn(product.unit).replace("প্রতি ", "")}</p>
          <div className="mt-1 inline-block">
            <span
              className={`text-xs font-bold ${
                product.change?.dir === "up"
                  ? "text-red-500"
                  : product.change?.dir === "down"
                  ? "text-green-500"
                  : "text-gray-500"
              }`}
            >
              {product.change?.dir === "up"
                ? `▲ ${toBengaliNumber(Math.abs(product.change.pct).toFixed(1))}%`
                : product.change?.dir === "down"
                ? `▼ ${toBengaliNumber(Math.abs(product.change.pct).toFixed(1))}%`
                : `— 0.0%`}
            </span>
          </div>
        </div>
      </div>

      {/* Price Summary Cards (দামের সারসংক্ষেপ) */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">দামের সারসংক্ষেপ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-400">সর্বনিম্ন দাম</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {formatPrice(minPrice)} <span className="text-sm font-normal text-gray-600">টাকা</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">সবচেয়ে কম দামের বাজার</p>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-400">সর্বাধিক দাম</p>
            <p className="text-2xl font-bold text-red-500 mt-1">
              {formatPrice(maxPrice)} <span className="text-sm font-normal text-gray-600">টাকা</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">সবচেয়ে বেশি দামের বাজার</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-400">গড় দাম</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">
              {formatPrice(calculatedAvg)} <span className="text-sm font-normal text-gray-600">টাকা</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">{getUnitBn(product.unit)} এর হিসাব</p>
          </div>
        </div>
      </div>

      {/* Market Breakdown Table (বাজারভিত্তিক আজকের দাম) */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6">বাজারভিত্তিক আজকের দাম</h2>
        
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500 text-sm">
                <th className="bg-transparent font-semibold text-left">বাজার</th>
                <th className="bg-transparent font-semibold text-left">বিভাগ</th>
                <th className="bg-transparent font-semibold text-left">সর্বনিম্ন</th>
                <th className="bg-transparent font-semibold text-left">সর্বাধিক</th>
                <th className="bg-transparent font-semibold text-left">গড়</th>
              </tr>
            </thead>
            <tbody>
              {markets.map((m, idx) => {
                const marketAvg = Math.round((m.min + m.max) / 2);
                return (
                  <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="font-medium text-gray-800">{m.market}</td>
                    <td className="text-gray-600">{m.division}</td>
                    <td className="text-gray-800">{formatPrice(m.min)} টাকা</td>
                    <td className="text-gray-800">{formatPrice(m.max)} টাকা</td>
                    <td className="text-gray-800 font-semibold">{formatPrice(marketAvg)} টাকা</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}