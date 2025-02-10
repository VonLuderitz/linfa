(function() {
    var type_impls = Object.fromEntries([["linfa_elasticnet",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#56\">Source</a><a href=\"#impl-Clone-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#56\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.1/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","linfa_elasticnet::hyperparams::ElasticNetParams","linfa_elasticnet::hyperparams::MultiTaskElasticNetParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#56\">Source</a><a href=\"#impl-Debug-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#56\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.84.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","linfa_elasticnet::hyperparams::ElasticNetParams","linfa_elasticnet::hyperparams::MultiTaskElasticNetParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#161-165\">Source</a><a href=\"#impl-Default-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a>, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#162-164\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.84.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","linfa_elasticnet::hyperparams::ElasticNetParams","linfa_elasticnet::hyperparams::MultiTaskElasticNetParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#168-231\">Source</a><a href=\"#impl-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a>, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h3></section></summary><div class=\"docblock\"><p>Configure and fit a Elastic Net model</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#177-185\">Source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h4></section></summary><div class=\"docblock\"><p>Create default elastic net hyper parameters</p>\n<p>By default, an intercept will be fitted. To disable fitting an\nintercept, call <code>.with_intercept(false)</code> before calling <code>.fit()</code>.</p>\n<p>To additionally normalize the feature matrix before fitting, call\n<code>fit_intercept_and_normalize()</code> before calling <code>fit()</code>. The feature\nmatrix will not be normalized by default.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.penalty\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#190-193\">Source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html#tymethod.penalty\" class=\"fn\">penalty</a>(self, penalty: F) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set the overall parameter penalty parameter of the elastic net, otherwise known as <code>alpha</code>.\nUse <code>l1_ratio</code> to configure how the penalty distributed to L1 and L2\nregularization.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.l1_ratio\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#203-206\">Source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html#tymethod.l1_ratio\" class=\"fn\">l1_ratio</a>(self, l1_ratio: F) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set l1_ratio parameter of the elastic net. Controls how the parameter\npenalty is distributed to L1 and L2 regularization.\nSetting <code>l1_ratio</code> to 1.0 is equivalent to a “Lasso” penalization,\nsetting it to 0.0 is equivalent to “Ridge” penalization.</p>\n<p>Defaults to <code>0.5</code> if not set</p>\n<p><code>l1_ratio</code> must be between <code>0.0</code> and <code>1.0</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_intercept\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#210-213\">Source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html#tymethod.with_intercept\" class=\"fn\">with_intercept</a>(self, with_intercept: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Configure the elastic net model to fit an intercept.\nDefaults to <code>true</code> if not set.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tolerance\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#219-222\">Source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html#tymethod.tolerance\" class=\"fn\">tolerance</a>(self, tolerance: F) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set the tolerance which is the minimum absolute change in any of the\nmodel parameters needed for the parameter optimization to continue.</p>\n<p>Defaults to <code>1e-4</code> if not set</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_iterations\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#227-230\">Source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html#tymethod.max_iterations\" class=\"fn\">max_iterations</a>(self, max_iterations: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u32.html\">u32</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set the maximum number of iterations for the optimization routine.</p>\n<p>Defaults to <code>1000</code> if not set</p>\n</div></details></div></details>",0,"linfa_elasticnet::hyperparams::ElasticNetParams","linfa_elasticnet::hyperparams::MultiTaskElasticNetParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParamGuard-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#233-260\">Source</a><a href=\"#impl-ParamGuard-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a>, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"linfa/param_guard/trait.ParamGuard.html\" title=\"trait linfa::param_guard::ParamGuard\">ParamGuard</a> for <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#238-254\">Source</a><a href=\"#method.check_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"linfa/param_guard/trait.ParamGuard.html#tymethod.check_ref\" class=\"fn\">check_ref</a>(&amp;self) -&gt; <a class=\"type\" href=\"linfa_elasticnet/type.Result.html\" title=\"type linfa_elasticnet::Result\">Result</a>&lt;&amp;Self::<a class=\"associatedtype\" href=\"linfa/param_guard/trait.ParamGuard.html#associatedtype.Checked\" title=\"type linfa::param_guard::ParamGuard::Checked\">Checked</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Validate the hyper parameters</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Checked\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#234\">Source</a><a href=\"#associatedtype.Checked\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"linfa/param_guard/trait.ParamGuard.html#associatedtype.Checked\" class=\"associatedtype\">Checked</a> = <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetValidParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetValidParamsBase\">ElasticNetValidParamsBase</a>&lt;F, MULTI_TASK&gt;</h4></section></summary><div class='docblock'>The checked hyperparameters</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#235\">Source</a><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"linfa/param_guard/trait.ParamGuard.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"linfa_elasticnet/enum.ElasticNetError.html\" title=\"enum linfa_elasticnet::ElasticNetError\">ElasticNetError</a></h4></section></summary><div class='docblock'>Error type resulting from failed hyperparameter checking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#256-259\">Source</a><a href=\"#method.check\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"linfa/param_guard/trait.ParamGuard.html#tymethod.check\" class=\"fn\">check</a>(self) -&gt; <a class=\"type\" href=\"linfa_elasticnet/type.Result.html\" title=\"type linfa_elasticnet::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"linfa/param_guard/trait.ParamGuard.html#associatedtype.Checked\" title=\"type linfa::param_guard::ParamGuard::Checked\">Checked</a>&gt;</h4></section></summary><div class='docblock'>Checks the hyperparameters and returns the checked hyperparameters if successful</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_unwrap\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa/param_guard.rs.html#29-31\">Source</a><a href=\"#method.check_unwrap\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"linfa/param_guard/trait.ParamGuard.html#method.check_unwrap\" class=\"fn\">check_unwrap</a>(self) -&gt; Self::<a class=\"associatedtype\" href=\"linfa/param_guard/trait.ParamGuard.html#associatedtype.Checked\" title=\"type linfa::param_guard::ParamGuard::Checked\">Checked</a><div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Calls <code>check()</code> and unwraps the result</div></details></div></details>","ParamGuard","linfa_elasticnet::hyperparams::ElasticNetParams","linfa_elasticnet::hyperparams::MultiTaskElasticNetParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#56\">Source</a><a href=\"#impl-PartialEq-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#56\">Source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.1/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","linfa_elasticnet::hyperparams::ElasticNetParams","linfa_elasticnet::hyperparams::MultiTaskElasticNetParams"],["<section id=\"impl-Eq-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#56\">Source</a><a href=\"#impl-Eq-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h3></section>","Eq","linfa_elasticnet::hyperparams::ElasticNetParams","linfa_elasticnet::hyperparams::MultiTaskElasticNetParams"],["<section id=\"impl-StructuralPartialEq-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_elasticnet/hyperparams.rs.html#56\">Source</a><a href=\"#impl-StructuralPartialEq-for-ElasticNetParamsBase%3CF,+MULTI_TASK%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, const MULTI_TASK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"linfa_elasticnet/struct.ElasticNetParamsBase.html\" title=\"struct linfa_elasticnet::ElasticNetParamsBase\">ElasticNetParamsBase</a>&lt;F, MULTI_TASK&gt;</h3></section>","StructuralPartialEq","linfa_elasticnet::hyperparams::ElasticNetParams","linfa_elasticnet::hyperparams::MultiTaskElasticNetParams"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[21755]}