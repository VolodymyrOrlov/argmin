(function() {var implementors = {};
implementors["argmin"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/core/checkpointing/struct.FileCheckpoint.html\" title=\"struct argmin::core::checkpointing::FileCheckpoint\">FileCheckpoint</a>","synthetic":false,"types":["argmin::core::checkpointing::file::FileCheckpoint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"argmin/core/checkpointing/enum.CheckpointingFrequency.html\" title=\"enum argmin::core::checkpointing::CheckpointingFrequency\">CheckpointingFrequency</a>","synthetic":false,"types":["argmin::core::checkpointing::CheckpointingFrequency"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/core/struct.KV.html\" title=\"struct argmin::core::KV\">KV</a>","synthetic":false,"types":["argmin::core::kv::KV"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"argmin/core/observers/file/enum.WriteToFileSerializer.html\" title=\"enum argmin::core::observers::file::WriteToFileSerializer\">WriteToFileSerializer</a>","synthetic":false,"types":["argmin::core::observers::file::WriteToFileSerializer"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/core/observers/struct.Observers.html\" title=\"struct argmin::core::observers::Observers\">Observers</a>&lt;I&gt;","synthetic":false,"types":["argmin::core::observers::Observers"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"argmin/core/observers/enum.ObserverMode.html\" title=\"enum argmin::core::observers::ObserverMode\">ObserverMode</a>","synthetic":false,"types":["argmin::core::observers::ObserverMode"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/core/struct.Problem.html\" title=\"struct argmin::core::Problem\">Problem</a>&lt;O&gt;","synthetic":false,"types":["argmin::core::problem::Problem"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, J:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, H:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/core/struct.IterState.html\" title=\"struct argmin::core::IterState\">IterState</a>&lt;P, G, J, H, F&gt;","synthetic":false,"types":["argmin::core::state::iterstate::IterState"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/core/struct.PopulationState.html\" title=\"struct argmin::core::PopulationState\">PopulationState</a>&lt;I, F, P&gt;","synthetic":false,"types":["argmin::core::state::populationstate::PopulationState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"argmin/core/enum.TerminationReason.html\" title=\"enum argmin::core::TerminationReason\">TerminationReason</a>","synthetic":false,"types":["argmin::core::termination::TerminationReason"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/core/test_utils/struct.TestProblem.html\" title=\"struct argmin::core::test_utils::TestProblem\">TestProblem</a>","synthetic":false,"types":["argmin::core::test_utils::TestProblem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/core/test_utils/struct.TestSolver.html\" title=\"struct argmin::core::test_utils::TestSolver\">TestSolver</a>","synthetic":false,"types":["argmin::core::test_utils::TestSolver"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.FletcherReeves.html\" title=\"struct argmin::solver::conjugategradient::beta::FletcherReeves\">FletcherReeves</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::FletcherReeves"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibiere.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibiere\">PolakRibiere</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::PolakRibiere"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibierePlus.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibierePlus\">PolakRibierePlus</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::PolakRibierePlus"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.HestenesStiefel.html\" title=\"struct argmin::solver::conjugategradient::beta::HestenesStiefel\">HestenesStiefel</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::HestenesStiefel"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"argmin/core/trait.ArgminFloat.html\" title=\"trait argmin::core::ArgminFloat\">ArgminFloat</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/gaussnewton/struct.GaussNewton.html\" title=\"struct argmin::solver::gaussnewton::GaussNewton\">GaussNewton</a>&lt;F&gt;","synthetic":false,"types":["argmin::solver::gaussnewton::gaussnewton_method::GaussNewton"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.ArmijoCondition.html\" title=\"struct argmin::solver::linesearch::condition::ArmijoCondition\">ArmijoCondition</a>&lt;F&gt;","synthetic":false,"types":["argmin::solver::linesearch::condition::armijo::ArmijoCondition"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.GoldsteinCondition.html\" title=\"struct argmin::solver::linesearch::condition::GoldsteinCondition\">GoldsteinCondition</a>&lt;F&gt;","synthetic":false,"types":["argmin::solver::linesearch::condition::goldstein::GoldsteinCondition"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.StrongWolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::StrongWolfeCondition\">StrongWolfeCondition</a>&lt;F&gt;","synthetic":false,"types":["argmin::solver::linesearch::condition::strongwolfe::StrongWolfeCondition"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.WolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::WolfeCondition\">WolfeCondition</a>&lt;F&gt;","synthetic":false,"types":["argmin::solver::linesearch::condition::wolfe::WolfeCondition"]},{"text":"impl&lt;P, G, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/struct.HagerZhangLineSearch.html\" title=\"struct argmin::solver::linesearch::HagerZhangLineSearch\">HagerZhangLineSearch</a>&lt;P, G, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"argmin_math/trait.ArgminScaledAdd.html\" title=\"trait argmin_math::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;P, F, P&gt; + <a class=\"trait\" href=\"argmin_math/trait.ArgminDot.html\" title=\"trait argmin_math::ArgminDot\">ArgminDot</a>&lt;G, F&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"argmin/core/trait.ArgminFloat.html\" title=\"trait argmin::core::ArgminFloat\">ArgminFloat</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch"]},{"text":"impl&lt;P, G, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/struct.MoreThuenteLineSearch.html\" title=\"struct argmin::solver::linesearch::MoreThuenteLineSearch\">MoreThuenteLineSearch</a>&lt;P, G, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"argmin/core/trait.ArgminFloat.html\" title=\"trait argmin::core::ArgminFloat\">ArgminFloat</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::linesearch::morethuente::MoreThuenteLineSearch"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/newton/struct.Newton.html\" title=\"struct argmin::solver::newton::Newton\">Newton</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"argmin/core/trait.ArgminFloat.html\" title=\"trait argmin::core::ArgminFloat\">ArgminFloat</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::newton::newton_method::Newton"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"argmin/solver/simulatedannealing/enum.SATempFunc.html\" title=\"enum argmin::solver::simulatedannealing::SATempFunc\">SATempFunc</a>&lt;F&gt;","synthetic":false,"types":["argmin::solver::simulatedannealing::SATempFunc"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.CauchyPoint.html\" title=\"struct argmin::solver::trustregion::CauchyPoint\">CauchyPoint</a>&lt;F&gt;","synthetic":false,"types":["argmin::solver::trustregion::cauchypoint::CauchyPoint"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.Dogleg.html\" title=\"struct argmin::solver::trustregion::Dogleg\">Dogleg</a>&lt;F&gt;","synthetic":false,"types":["argmin::solver::trustregion::dogleg::Dogleg"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.62.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.Steihaug.html\" title=\"struct argmin::solver::trustregion::Steihaug\">Steihaug</a>&lt;P, F&gt;","synthetic":false,"types":["argmin::solver::trustregion::steihaug::Steihaug"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()