(function() {
    var type_impls = Object.fromEntries([["linfa_reduction",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RandomProjection%3CProj,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#59-85\">Source</a><a href=\"#impl-RandomProjection%3CProj,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj: ProjectionMethod, F: Float&gt; <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjection.html\" title=\"struct linfa_reduction::random_projection::RandomProjection\">RandomProjection</a>&lt;Proj, F&gt;<div class=\"where\">where\n    Proj::RandomDistribution: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;F&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.params\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#65-71\">Source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_reduction/random_projection/struct.RandomProjection.html#tymethod.params\" class=\"fn\">params</a>() -&gt; <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionParams\">RandomProjectionParams</a>&lt;Proj, <a class=\"struct\" href=\"https://docs.rs/rand_xoshiro/0.6.0/rand_xoshiro/xoshiro256plus/struct.Xoshiro256Plus.html\" title=\"struct rand_xoshiro::xoshiro256plus::Xoshiro256Plus\">Xoshiro256Plus</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create new parameters for a <a href=\"linfa_reduction/random_projection/struct.RandomProjection.html\" title=\"struct linfa_reduction::random_projection::RandomProjection\"><code>RandomProjection</code></a> with default value\n<code>eps = 0.1</code> and a <a href=\"https://docs.rs/rand_xoshiro/0.6.0/rand_xoshiro/xoshiro256plus/struct.Xoshiro256Plus.html\" title=\"struct rand_xoshiro::xoshiro256plus::Xoshiro256Plus\"><code>Xoshiro256Plus</code></a> RNG.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.params_with_rng\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#75-84\">Source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_reduction/random_projection/struct.RandomProjection.html#tymethod.params_with_rng\" class=\"fn\">params_with_rng</a>&lt;R&gt;(rng: R) -&gt; <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionParams\">RandomProjectionParams</a>&lt;Proj, R&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class=\"docblock\"><p>Create new parameters for a <a href=\"linfa_reduction/random_projection/struct.RandomProjection.html\" title=\"struct linfa_reduction::random_projection::RandomProjection\"><code>RandomProjection</code></a> with default values\n<code>eps = 0.1</code> and the provided <a href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\"><code>Rng</code></a>.</p>\n</div></details></div></details>",0,"linfa_reduction::random_projection::GaussianRandomProjection","linfa_reduction::random_projection::SparseRandomProjection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transformer%3C%26ArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+ArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E%3E-for-RandomProjection%3CProj,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#87-99\">Source</a><a href=\"#impl-Transformer%3C%26ArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+ArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E%3E-for-RandomProjection%3CProj,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj, F, D&gt; Transformer&lt;&amp;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.array.html\">2</a>]&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;F&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.array.html\">2</a>]&gt;&gt;&gt; for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjection.html\" title=\"struct linfa_reduction::random_projection::RandomProjection\">RandomProjection</a>&lt;Proj, F&gt;<div class=\"where\">where\n    Proj: ProjectionMethod,\n    F: Float,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;,\n    <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/linalg/impl_linalg/trait.Dot.html\" title=\"trait ndarray::linalg::impl_linalg::Dot\">Dot</a>&lt;Proj::ProjectionMatrix&lt;F&gt;, Output = <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;&gt;,\n    Proj::RandomDistribution: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;F&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.transform\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#96-98\">Source</a><a href=\"#method.transform\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">transform</a>(&amp;self, x: &amp;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;) -&gt; <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;</h4></section></summary><div class=\"docblock\"><p>Compute the embedding of a two-dimensional array</p>\n</div></details></div></details>","Transformer<&ArrayBase<D, Dim<[usize; 2]>>, ArrayBase<OwnedRepr<F>, Dim<[usize; 2]>>>","linfa_reduction::random_projection::GaussianRandomProjection","linfa_reduction::random_projection::SparseRandomProjection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transformer%3C%26DatasetBase%3CArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E,+T%3E,+DatasetBase%3CArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E,+%3CT+as+FromTargetArray%3C'a%3E%3E::View%3E%3E-for-RandomProjection%3CProj,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#141-169\">Source</a><a href=\"#impl-Transformer%3C%26DatasetBase%3CArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E,+T%3E,+DatasetBase%3CArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E,+%3CT+as+FromTargetArray%3C'a%3E%3E::View%3E%3E-for-RandomProjection%3CProj,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Proj, F, L, T&gt; Transformer&lt;&amp;'a DatasetBase&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;F&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.array.html\">2</a>]&gt;&gt;, T&gt;, DatasetBase&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;F&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.array.html\">2</a>]&gt;&gt;, &lt;T as FromTargetArray&lt;'a&gt;&gt;::View&gt;&gt; for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjection.html\" title=\"struct linfa_reduction::random_projection::RandomProjection\">RandomProjection</a>&lt;Proj, F&gt;<div class=\"where\">where\n    Proj: ProjectionMethod,\n    F: Float,\n    L: 'a,\n    T: AsTargets&lt;Elem = L&gt; + FromTargetArray&lt;'a&gt;,\n    for&lt;'b&gt; <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ViewRepr.html\" title=\"struct ndarray::ViewRepr\">ViewRepr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;'b F</a>&gt;, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/linalg/impl_linalg/trait.Dot.html\" title=\"trait ndarray::linalg::impl_linalg::Dot\">Dot</a>&lt;Proj::ProjectionMatrix&lt;F&gt;, Output = <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;&gt;,\n    Proj::RandomDistribution: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;F&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.transform\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#161-168\">Source</a><a href=\"#method.transform\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">transform</a>(\n    &amp;self,\n    data: &amp;'a DatasetBase&lt;<a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;, T&gt;,\n) -&gt; DatasetBase&lt;<a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;, T::View&gt;</h4></section></summary><div class=\"docblock\"><p>Compute the embedding of a dataset</p>\n<h5 id=\"parameter\"><a class=\"doc-anchor\" href=\"#parameter\">§</a>Parameter</h5>\n<ul>\n<li><code>data</code>: a dataset</li>\n</ul>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<p>New dataset, with data equal to the embedding of the input data</p>\n</div></details></div></details>","Transformer<&'a DatasetBase<ArrayBase<OwnedRepr<F>, Dim<[usize; 2]>>, T>, DatasetBase<ArrayBase<OwnedRepr<F>, Dim<[usize; 2]>>, <T as FromTargetArray<'a>>::View>>","linfa_reduction::random_projection::GaussianRandomProjection","linfa_reduction::random_projection::SparseRandomProjection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transformer%3CArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+ArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E%3E-for-RandomProjection%3CProj,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#101-113\">Source</a><a href=\"#impl-Transformer%3CArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+ArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E%3E-for-RandomProjection%3CProj,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj, F, D&gt; Transformer&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.array.html\">2</a>]&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;F&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.array.html\">2</a>]&gt;&gt;&gt; for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjection.html\" title=\"struct linfa_reduction::random_projection::RandomProjection\">RandomProjection</a>&lt;Proj, F&gt;<div class=\"where\">where\n    Proj: ProjectionMethod,\n    F: Float,\n    D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;,\n    <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/linalg/impl_linalg/trait.Dot.html\" title=\"trait ndarray::linalg::impl_linalg::Dot\">Dot</a>&lt;Proj::ProjectionMatrix&lt;F&gt;, Output = <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;&gt;,\n    Proj::RandomDistribution: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;F&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.transform\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#110-112\">Source</a><a href=\"#method.transform\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">transform</a>(&amp;self, x: <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;) -&gt; <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;</h4></section></summary><div class=\"docblock\"><p>Compute the embedding of a two-dimensional array</p>\n</div></details></div></details>","Transformer<ArrayBase<D, Dim<[usize; 2]>>, ArrayBase<OwnedRepr<F>, Dim<[usize; 2]>>>","linfa_reduction::random_projection::GaussianRandomProjection","linfa_reduction::random_projection::SparseRandomProjection"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transformer%3CDatasetBase%3CArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E,+T%3E,+DatasetBase%3CArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E,+T%3E%3E-for-RandomProjection%3CProj,+F%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#115-139\">Source</a><a href=\"#impl-Transformer%3CDatasetBase%3CArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E,+T%3E,+DatasetBase%3CArrayBase%3COwnedRepr%3CF%3E,+Dim%3C%5Busize;+2%5D%3E%3E,+T%3E%3E-for-RandomProjection%3CProj,+F%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj, F, T&gt; Transformer&lt;DatasetBase&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;F&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.array.html\">2</a>]&gt;&gt;, T&gt;, DatasetBase&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;F&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.array.html\">2</a>]&gt;&gt;, T&gt;&gt; for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjection.html\" title=\"struct linfa_reduction::random_projection::RandomProjection\">RandomProjection</a>&lt;Proj, F&gt;<div class=\"where\">where\n    Proj: ProjectionMethod,\n    F: Float,\n    T: AsTargets,\n    for&lt;'a&gt; <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ViewRepr.html\" title=\"struct ndarray::ViewRepr\">ViewRepr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;'a F</a>&gt;, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/linalg/impl_linalg/trait.Dot.html\" title=\"trait ndarray::linalg::impl_linalg::Dot\">Dot</a>&lt;Proj::ProjectionMatrix&lt;F&gt;, Output = <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;&gt;,\n    Proj::RandomDistribution: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;F&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.transform\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#134-138\">Source</a><a href=\"#method.transform\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">transform</a>(\n    &amp;self,\n    data: DatasetBase&lt;<a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;, T&gt;,\n) -&gt; DatasetBase&lt;<a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array2.html\" title=\"type ndarray::aliases::Array2\">Array2</a>&lt;F&gt;, T&gt;</h4></section></summary><div class=\"docblock\"><p>Compute the embedding of a dataset</p>\n<h5 id=\"parameter\"><a class=\"doc-anchor\" href=\"#parameter\">§</a>Parameter</h5>\n<ul>\n<li><code>data</code>: a dataset</li>\n</ul>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<p>New dataset, with data equal to the embedding of the input data</p>\n</div></details></div></details>","Transformer<DatasetBase<ArrayBase<OwnedRepr<F>, Dim<[usize; 2]>>, T>, DatasetBase<ArrayBase<OwnedRepr<F>, Dim<[usize; 2]>>, T>>","linfa_reduction::random_projection::GaussianRandomProjection","linfa_reduction::random_projection::SparseRandomProjection"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[22644]}