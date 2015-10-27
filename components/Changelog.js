const React = require('react');

const Changelog = React.createClass({
  render () {
    return (
      <div>
        <h1>Change Log</h1>

        <h3>1.2.2</h3>
        <ul>
          <li>Flip tooltip on middle date rather than break point date in TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/pull/76'>#76</a>)</li>
          <li>Remove 100% height from DatePicker, add 40px bottom margin for spacing (<a href='https://github.com/mxenabled/mx-react-components/commit/58eda17c263895e80304919f4e1b874e0c33b67b'>see commit</a>)</li>
          <li>Add 1 interval buffer between start and end toggles in RangeSelector (<a href='https://github.com/mxenabled/mx-react-components/commit/52246399464bfe301594477406df1338e9329a65'>see commit</a>)</li>
          <li>Apply props.style onto wrapping component in TimeBasedLineChart (<a href='https://github.com/mxenabled/mx-react-components/commit/0b70105e10b80218da470b395a168549ee05d636'>see commit</a>)</li>
        </ul>

        <h3>1.2.1</h3>
        <ul>
          <li>Add css classes to Icon component (<a href='https://github.com/mxenabled/mx-react-components/pull/71'>#71</a>)</li>
          <li>Add css classes to DonutChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/72'>#72</a>)</li>
          <li>Add simpler default tool tip to TimeBasedLineChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/73'>#73</a>)</li>
          <li>Fix various bugs in TimeBasedLineChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/74'>#74</a>)</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/guilhermefloriani'>guilhermefloriani</a></p>

        <h3>1.2.0</h3>
        <ul>
          <li>Add new DatePicker component (<a href='https://github.com/mxenabled/mx-react-components/pull/57'>#57</a>, docs coming soon)</li>
          <li>Add new TimeBasedLineChart component (<a href='https://github.com/mxenabled/mx-react-components/pull/63'>#63</a>, docs coming soon)</li>
          <li>Increase space between RangeSelector group label and selected line (<a href='https://github.com/mxenabled/mx-react-components/pull/61'>#61</a>)</li>
          <li>Add css classes to Select component (<a href='https://github.com/mxenabled/mx-react-components/pull/62'>#62</a>)</li>
          <li>BREAKING CHANGE: renamed `range` prop to `upperBound` on RangeSelector component (<a href='https://github.com/mxenabled/mx-react-components/pull/64'>#64</a>)</li>
          <li>Add ability to set the lower bound (positive or negative) of the RangeSelector (<a href='https://github.com/mxenabled/mx-react-components/pull/64'>#64</a>)</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/tumentumurchudur'>tumentumurchudur</a>, <a href='http://github.com/shubhekshajalan'>shubhekshajalan</a></p>

        <h3>1.1.0</h3>
        <ul>
          <li>Add new ToggleSwitch component</li>
          <li>Fix issue with DonutChart click events (<a href='https://github.com/mxenabled/mx-react-components/pull/51'>#51</a>)</li>
          <li>Add css classes to Spin component (<a href='https://github.com/mxenabled/mx-react-components/pull/52'>#52</a>)</li>
          <li>Add css classes to RangeSelector component (<a href='https://github.com/mxenabled/mx-react-components/pull/54'>#54</a>)</li>
          <li>Fix issue with the RangeSelelctor when resizing the window (<a href='https://github.com/mxenabled/mx-react-components/pull/55'>#55</a>)</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/psigns'>psigns</a>, <a href='http://github.com/tegon'>tegon</a></p>

        <h3>1.0.0</h3>
        <ul>
          <li>Upgrade to React 0.14 (see <a href='http://facebook.github.io/react/blog/2015/10/07/react-v0.14.html'>React v0.14</a>)</li>
        </ul>

        <h3>0.4.1</h3>
        <ul>
          <li>Add MIT License</li>
          <li>Add CONTRIBUTING.md</li>
          <li>Add css classes to TypeAhead and Loader components</li>
          <li>Update default styling and props of DonutChart</li>
          <li>Add `dropdownStyle` prop to DonutChart</li>
        </ul>
        <p>New Contributors: <a href='http://github.com/httpete-ire'>httpete-ire</a>, <a href='http://github.com/wpmk2'>wpmk2</a>, <a href='http://github.com/tkarling'>tkarling</a></p>

        <h3>0.3.0</h3>
        <ul>
          <li>Add new Modal component</li>
          <li>Add touch events to RangeSelector</li>
          <li>Use default select on mobile devices for the Select component</li>
          <li>Update demo to be responsive</li>
        </ul>

        <h3>0.2.0</h3>
        <ul>
          <li>Add TypeAhead component</li>
          <li>Add npm scripts: `demo` and `release`</li>
          <li>Add support for TravisCi</li>
          <li>Exclude the `dist` directory from repo</li>
        </ul>

      </div>
    );
  }
});

module.exports = Changelog;