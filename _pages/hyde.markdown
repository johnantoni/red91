
sudo port selfupdate

sudo port install python26
sudo port install python_select
sudo python_select python26

sudo port install py26-django 
sudo port install py26-yaml
sudo port install py26-markdown
sudo port install py26-pygments


mkdir ~/HydeProject
cd ~/HydeProject


curl -O http://www.julienlecomte.net/yuicompressor/yuicompressor-2.4.2.zip
unzip yuicompressor-2.4.2.zip
rm yuicompressor-2.4.2.zip


git clone git://github.com/lakshmivyas/hyde.git

git clone git://github.com/lakshmivyas/ringce.git

mkdir website_src
mkdir website_deploy

cd ~/HydeProject/hyde
python hyde.py --init --template=default -s ~/HydeProject/website_src

python2.6 hyde.py --init --template=default -s ~/HydeProject/website_src 

http://wiki.github.com/lakshmivyas/hyde/installing-hyde-on-mac-os-x-using-macports
