javascript:(function(){
    var _init = function () {
        if ($('#decolumnize_bar').length) {
            return;
        }

        _createToolBar();
        _events();
    },

    _createToolBar = function () {
        var $bar_container = $('<div id="decolumnize_bar"><div>'),
            $jira_id = $('[data-id]'),
            $jira_columns_header = $('#ghx-column-header-group');

        $jira_id.each(function (index, elem) {
            var label = $(elem).find('h2').text(),
                id = $(elem).data('id');
            $bar_container.append('<label style="margin-right:10px;"><input id="jira_column_checkbox" type="checkbox" name="'+label+'" value="'+id+'" checked>'+ label + '</label>');
        });

        $bar_container.css({
            'background': '#2e3d54',
            'padding': '10px',
            'color': '#fff',
			'position': 'fixed',
			'bottom': 0,
			'z-index': 9999999
        });

        $('body').prepend($bar_container);
    },

    _events = function () {
        $(document).on('click', '#jira_column_checkbox', _handleShowHideColumn);
    },

    _handleShowHideColumn = function (ev) {
        var id = $(ev.target).val(),
            $column= $('[data-column-id='+id+']');
            $column_label= $('[data-id='+id+']');

        if ($column.is(':visible')) {
            _hideColumn($column, $column_label);
        } else {
            _showColumn($column, $column_label);
        }
    },

    _hideColumn = function ($column, $column_label) {
        $column.css('display', 'none');
        $column_label.css('display', 'none');
    },
    _showColumn = function ($column, $column_label) {
        $column.css('display', 'table-cell');
        $column_label.css('display', 'table-cell');
    },

    // getScript()
    // more or less stolen form jquery core and adapted by paul irish
    _getScript = function (url) {

        var head = document.getElementsByTagName("head")[0], done = false;
        var script = document.createElement("script");
        script.src = url;



        // Attach handlers for all browsers
        script.onload = script.onreadystatechange = function(){
            if ( !done && (!this.readyState ||
                this.readyState == "loaded" || this.readyState == "complete") ) {
                done = true;
            }
        };

        head.appendChild(script);

    },

    timer = window.setInterval(function(){
        if ($) {
            window.clearInterval(timer);
            _init();
        }
    }, 20);

    _getScript('http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js');

})();
