const data = {
  "name": "flare",
  "children": [

    {
      "name": "cluster",
      "children": [
        {
          "name": "AgglomerativeCluster",
          "value": 3938
        },
        {
          "name": "CommunityStructure",
          "value": 3812
        },
        {
          "name": "HierarchicalCluster",
          "value": 6714
        },
        {
          "name": "MergeEdge",
          "value": 743
        }
      ]
    },
    {
      "name": "graph",
      "children": [
        {
          "name": "BetweennessCentrality",
          "value": 3534
        },
        {
          "name": "LinkDistance",
          "value": 5731
        },
        {
          "name": "MaxFlowMinCut",
          "value": 7840
        },
        {
          "name": "ShortestPaths",
          "value": 5914
        },
        {
          "name": "SpanningTree",
          "value": 3416
        }
      ]
    },
    {
      "name": "optimization",
      "children": [
        {
          "name": "AspectRatioBanker",
          "value": 7074
        }
      ]
    }
  ]
};
var tree = document.getElementById('tree');
//const obj = JSON.parse(data);
tree.innerHTML = person(data);

$(function () {
  $('.genealogy-tree ul').hide();
  $('.genealogy-tree>ul').show();
  $('.genealogy-tree ul.active').show();
  $('.genealogy-tree li').on('click', function (e) {
    var children = $(this).find('> ul');
    if (children.is(":visible")) children.hide('fast').removeClass('active');
    else children.show('fast').addClass('active');
    e.stopPropagation();
  });
});


function listTree(t) {
  return t.children.map(function (p, index) {
    return person(p)
  }).join('');
}

function person(data) {
  return `
    <li>
        <a href="javascript:void(0)" onclick="hide()">
            <div class="member-view-box">
                <div class="member-image">
                    <img src="https://avatars.githubusercontent.com/u/20057010?s=64&v=4" alt="Member">
                    <div class="member-details">
                        <h3>${data.name}</h3>
                    </div>
                </div>
            </div>
        </a>
        ${data.children != null ? `<ul>${listTree(data)}</ul>` : ``}
    </li>
  `
}
