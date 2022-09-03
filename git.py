#!/usr/bin/env python3
import os
import sys

def cmd(t): os.system(t)

def c(t):
	switch={
		"push":cmd("git push -u origin main"),
		"add":cmd("git add $()".format(args[3]))
	}
	return switch.get(t,"Invalid input")

def main(args):
	c(args)
	
if __name__ == "__main__":main(sys.argv)
